import { IUser, userSchema } from "./user.model";
import { IReview } from "./review.model";
import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IComment extends Document {
  user: Types.ObjectId | IUser;
  comment: string;
  review: Types.ObjectId | IReview;
}

export const commentSchema = new Schema<IComment>({
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  comment: String,
  // review: {
  //   type: Types.ObjectId,
  //   ref: "Review",
  // },
});

export const commentModel: Model<IComment> = mongoose.model(
  "Comment",
  commentSchema
);
