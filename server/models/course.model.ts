import mongoose, { Document, Model, Schema, Types } from "mongoose";
import { IReview, reviewSchema } from "./review.model";
import { ICourseData, courseDataSchema } from "./coursedata.model";

export interface ICourse extends Document {
  name: string;
  description: string;
  price: number;
  estimatedPrice: number;
  thumbnail: object;
  tags: string[];
  level: string;
  demoUrl: string;
  benefits: { title: string }[];
  prerequisites: { title: string }[];
  reviews: Types.ObjectId[] | IReview[];
  courseData: Types.ObjectId[] | ICourseData[];
  ratings: number;
  purchased: number;
}

const courseSchema: Schema<ICourse> = new Schema({
  name: String,
  estimatedPrice: Number,
  description: String,
  price: Number,
  thumbnail: Object,
  tags: [String],
  level: String,
  demoUrl: String,
  benefits: [{ title: String }],
  prerequisites: [{ title: String }],
  //   reviews: [
  //     {
  //       type: Types.ObjectId,
  //       ref: "Review",
  //     },
  //   ],
  reviews: [reviewSchema],
  //   courseData: [
  //     {
  //       type: Types.ObjectId,
  //       ref: "CourseData",
  //     },
  //   ],

  courseData: [courseDataSchema],
  ratings: {
    type: Number,
    default: 0,
  },
  purchased: {
    type: Number,
    default: 0,
  },
});

export const courseModel: Model<ICourse> = mongoose.model(
  "Course",
  courseSchema
);
