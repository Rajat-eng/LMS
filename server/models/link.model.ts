import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface ILink extends Document {
  title: string;
  url: string;
  course: Schema.Types.ObjectId;
}

export const linkSchema = new Schema<ILink>({
  title: String,
  url: String,
  // course: {
  //   type: Schema.Types.ObjectId,
  //   ref: "CourseData",
  // },
});

export const linkModel: Model<ILink> = mongoose.model("Link", linkSchema);
