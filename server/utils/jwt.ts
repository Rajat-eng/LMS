require("dotenv").config();

import { Response, Request, NextFunction } from "express";

import { IUser } from "../models/user.model";
import { redis } from "./redis";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";

interface ITokenOptions {
  expires: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "lax" | "strict" | "none" | undefined;
  secure?: boolean;
}

const refreshTokenExpire = parseInt(process.env.REFRESH_TOKEN_EXPIRE || "", 10);
const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXPIRE || "", 10);

export const accessTokenOptions: ITokenOptions = {
  expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000), // 5 hrs
  maxAge: accessTokenExpire * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

export const refreshTokenOptions: ITokenOptions = {
  expires: new Date(Date.now() + refreshTokenExpire * 60 * 60 * 1000 * 24), // 3 days
  maxAge: refreshTokenExpire * 60 * 60 * 1000 * 24,
  httpOnly: true,
  sameSite: "lax",
};
export const sendToken = async (
  user: IUser,
  statusCode: number,
  res: Response
) => {
  const accessToken = user.signAccessToken(); // 5 minutes
  const refreshToken = user.refreshAccessToken(); // 3 days

  // upload to redis
  await redis.set(user._id, JSON.stringify(user));

  if (process.env.NODE_ENV === "production") {
    accessTokenOptions.secure = true;
    refreshTokenOptions.secure = true;
  }

  res.cookie("access_token", accessToken, accessTokenOptions);
  res.cookie("refresh_token", refreshToken, refreshTokenOptions);

  return res.status(statusCode).json({
    success: true,
    user,
    accessToken,
  });
};
