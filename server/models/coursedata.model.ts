import mongoose, { Document, Model, Schema, Types } from "mongoose";
import { IComment, commentSchema } from "./comment.model";
import { ILink, linkSchema } from "./link.model";
import { ICourse } from "./course.model";

export interface ICourseData extends Document {
  title: string;
  description: string;
  videoUrl: string;
  videoThumbnail: object;
  videoSection: string;
  videoLength: number;
  videoPlayer: string;
  links: Types.ObjectId[] | ILink[];
  suggestion: string;
  questions: IComment[];
  course: Types.ObjectId | ICourse;
}

export const courseDataSchema = new Schema<ICourseData>({
  title: String,
  description: String,
  videoUrl: String,
  videoSection: String,
  videoLength: Number,
  videoPlayer: String,
  suggestion: String,
  // links: [
  //   {
  //     type: Types.ObjectId,
  //     ref: "Link",
  //   },
  // ],
  links: [linkSchema],
  questions: [commentSchema],
  // course: {
  //   type: Types.ObjectId,
  //   ref: "Course",
  // },
});

export const courseDataModel: Model<ICourseData> = mongoose.model(
  "CourseData",
  courseDataSchema
);
