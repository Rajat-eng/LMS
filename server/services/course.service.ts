import { courseModel } from "../models/course.model";
import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../utils/ErrorHandler";

export const createCourseService = async (data: any) => {
  try {
    const course = await courseModel.create(data);
  } catch (error: any) {
    throw new ErrorHandler(error.message, error.statusCode);
  }
};
