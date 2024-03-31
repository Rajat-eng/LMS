import mongoose, { Document, Model, Schema, Types } from "mongoose";
import { IUser, userSchema } from "./user.model";
import { IComment, commentSchema } from "./comment.model";

export interface IReview extends Document {
  user: Types.ObjectId | IUser;
  rating: number;
  comment: string;
  commentReplies: Schema.Types.ObjectId[] | IComment[];
}

export const reviewSchema = new Schema<IReview>({
  user: userSchema,
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  // commentReplies: [
  //   {
  //     type: Types.ObjectId,
  //     ref: "Comment",
  //   },
  // ],
  commentReplies: [commentSchema],
});

export const reviewModel: Model<IReview> = mongoose.model(
  "Review",
  reviewSchema
);
