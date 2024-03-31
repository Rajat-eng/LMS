import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { courseModel } from "../models/course.model";
import cloudinary from "cloudinary";
import { Request, Response, NextFunction } from "express";
import { createCourseService } from "../services/course.service";

export const createCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { thumbnail, ...data } = req.body;
    if (thumbnail) {
      const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
        folder: "Courses",
      });
      data.thumbnail = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
    const course = await createCourseService(data);
    return res.status(201).json({
      success: true,
      course,
      message: "Course Created",
    });
  }
);
