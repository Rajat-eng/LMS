import { Request, Response, NextFunction } from "express";
import path from "path";
import userModel, { IUser } from "../models/user.model";
import { ErrorHandler } from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { createActivationToken } from "../helpers/createActivationToken";
import ejs from "ejs";
import { sendMail } from "../utils/sendMail";
import jwt, { Secret } from "jsonwebtoken";
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
      const { name, email, password } = req.body;

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
    try {
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
      });

      return res.status(201).json({
        success: true,
        message: "User created.Please Login",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
