import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./catchAsyncErrors";
import { assert } from "console";
import { ErrorHandler } from "../utils/ErrorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redis } from "../utils/redis";
require("dotenv").config();

export const isAuthenticated = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const access_token = req.cookies.access_token as string; // cookie expiry 5h expiry // access_token_expiry is 5m

      if (!access_token) {
        return next(new ErrorHandler("please login", 400));
      }
      const decoded = jwt.verify(
        access_token,
        process.env.ACCESS_TOKEN as string
      ) as JwtPayload;

      if (!decoded) {
        return next(new ErrorHandler("invalid access token", 400));
      }
      const user = await redis.get(decoded.id);

      if (!user) {
        return next(new ErrorHandler("User not found", 400));
      }

      req.user = JSON.parse(user);
      next();
    } catch (error: any) {
      return next(new ErrorHandler(error.message, error.statusCode));
    }
  }
);

export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!roles.includes(req.user?.role || "")) {
        return next(
          new ErrorHandler(
            `Role ${req.user?.role || ""} allowed to access this resource`,
            403
          )
        );
      }
      next();
    } catch (error) {
      return next(new ErrorHandler("Internal Server Error", 500));
    }
  };
};
