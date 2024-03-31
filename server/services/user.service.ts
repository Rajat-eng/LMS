import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import userModel, { IUser } from "../models/user.model";
import { ErrorHandler } from "../utils/ErrorHandler";
import { redis } from "../utils/redis";

export const getUserById = async (id: string) => {
  try {
    const user = await redis.get(id);
    if (user) {
      return JSON.parse(user);
    } else {
      throw new ErrorHandler("No user found", 400);
    }
  } catch (error: any) {
    console.log(error);
    throw new ErrorHandler(error.message, error.statusCode);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await userModel.findOne({ email });
    return user;
  } catch (error: any) {
    throw new ErrorHandler(error.message, error.statusCode);
  }
};

export const createUser = async (user: Partial<IUser>) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error: any) {
    throw new ErrorHandler(error.message, error.statusCode);
  }
};

export const updateUserService = async (user: Partial<IUser>, id: string) => {
  try {
    const currUser = await userModel.findByIdAndUpdate(
      id,
      { email: user.email, name: user.name },
      { new: true }
    );

    return currUser;
  } catch (error: any) {
    throw new ErrorHandler(error.message, error.statusCode);
  }
};
