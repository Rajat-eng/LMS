import { Request, Response, NextFunction } from "express";
import path from "path";
import userModel, { IUser } from "../models/user.model";
import { ErrorHandler } from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { createActivationToken } from "../helpers/createActivationToken";
import ejs from "ejs";
import { sendMail } from "../utils/sendMail";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import {
  accessTokenOptions,
  refreshTokenOptions,
  sendToken,
} from "../utils/jwt";
import { redis } from "../utils/redis";
import {
  getUserById,
  getUserByEmail,
  createUser,
  updateUserService,
} from "../services/user.service";
import cloudinary from "cloudinary";
require("dotenv").config();

//register user
interface IRegistrationBody {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export const registrationUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body as IRegistrationBody;

      const isEmailExist = await userModel.findOne({ email });
      if (isEmailExist) {
        return next(new ErrorHandler("Email already exist", 400));
      }
      const user: Partial<IUser> = {
        name,
        email,
        password,
      };

      const activationToken = createActivationToken(user);
      const activationCode = activationToken.activationCode;
      const data = { user: { name: user.name }, activationCode };
      try {
        await sendMail({
          email: user.email as string,
          subject: "Activate Your Account",
          template: "activationMail.ejs",
          data,
        });

        return res.status(201).json({
          success: true,
          activationToken: activationToken.token,
          message: `Please Check Your Email:${user.email} to activate your account`,
        });
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
interface IActivationRequest {
  activation_token: string;
  activation_code: string;
}
export const activateUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { activation_token, activation_code } =
      req.body as IActivationRequest;

    const newUser = jwt.verify(
      activation_token,
      process.env.ACTIVATION_SECRET as Secret
    ) as { user: IUser; activationCode: string };

    if (newUser.activationCode !== activation_code) {
      return next(new ErrorHandler("Invalid Activation Token", 400));
    }
    const { name, email, password } = newUser.user;

    const user = await userModel.create({
      name,
      email,
      password,
      isVerified: true,
    });

    return res.status(201).json({
      success: true,
      message: "User created.Please Login",
    });
  }
);

export const loginUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ErrorHandler("Please enter email and password", 400);
    }

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      throw new ErrorHandler("You are not registerd with us", 400);
    }

    const isPasswordMatch = await user.comparePasword(password);
    if (!isPasswordMatch) {
      throw new ErrorHandler("Invalid Email or password", 400);
    }
    sendToken(user, 200, res);
  }
);

export const logoutUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.clearCookie("access_token");
      res.clearCookie("refresh_token");
      await redis.del(req.user?._id);
      return res.status(200).json({
        success: true,
        message: "Logged Out Successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const updateAccessToken = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const refresh_token = req.cookies.refresh_token; // cookie expire is 3days and token expire 3days
    const decoded = jwt.verify(
      refresh_token,
      process.env.REFRESH_TOKEN as string
    ) as JwtPayload;
    if (!decoded) {
      throw new ErrorHandler("could not refresh token", 400);
    }
    const session = await redis.get(decoded.id);
    if (!session) {
      throw new ErrorHandler("session has expired . Invalid token", 400);
    }

    const user = JSON.parse(session);

    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN as Secret,
      { expiresIn: "30m" }
    );

    const refresToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN as Secret,
      { expiresIn: "3d" }
    );
    req.user = user;
    res.cookie("access_token", accessToken, accessTokenOptions);
    res.cookie("refresh_token", refresToken, refreshTokenOptions);
    return res.status(200).json({
      success: true,
      access_token: accessToken,
    });
  }
);

export const getUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUserById(req.user?._id as string);

    return res.status(200).json({
      success: true,
      user,
    });
  }
);

interface ISocialBody {
  name: string;
  email: string;
  avatar?: {
    public_id: string;
    url: string;
  };
}

export const socialAuth = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, avatar } = req.body as ISocialBody;
    const user = await getUserByEmail(email);
    if (!user) {
      const newUser = await createUser({ name, email, avatar });
      sendToken(newUser, 200, res);
    } else {
      sendToken(user, 200, res);
    }
  }
);

interface IUpdateUser {
  name?: string;
  email?: string;
}
export const updateUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body as IUpdateUser;
    const updatedUser = await updateUserService(
      { email, name },
      req.user?.id as string
    );
    await redis.set(updatedUser?._id, JSON.stringify(updateUser));
    return res.status(200).json({
      updatedUser,
      success: true,
      message: "User successfully updated",
    });
  }
);

interface IUserPassword {
  oldPassword: string;
  newPassword: string;
}

export const updatePassword = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userModel.findById(req.user?.id).select("+password");
    const { oldPassword, newPassword } = req.body as IUserPassword;
    const isPasswordMatch = user?.comparePasword(oldPassword);
    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid Old Password", 400));
    }
    if (user?.password === undefined) {
      return next(new ErrorHandler("Invalid User", 400));
    }
    user.password = newPassword;
    await user.save();
    await redis.set(user._id, JSON.stringify(user));
    return res.status(200).json({
      success: true,
      user,
    });
  }
);

export const updateAvatar = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userModel.findById(req.user?._id);
    if (!user) {
      return next(new ErrorHandler("No user found", 400));
    }
    const { avatar } = req.body;

    if (avatar) {
      if (user.avatar.public_id) {
        await cloudinary.v2.uploader.destroy(user.avatar.public_id);
      } else {
        const image = await cloudinary.v2.uploader.upload(avatar, {
          folder: "avatars",
          width: 150,
        });
        user.avatar = {
          public_id: image.public_id,
          url: image.secure_url,
        };
      }
    }

    await user.save();

    await redis.set(user._id, JSON.stringify(user));

    return res.status(200).json({
      success: true,
      message: "image uploaded successfully",
    });
  }
);
