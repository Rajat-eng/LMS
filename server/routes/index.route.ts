import express from "express";
import userRouter from "./user.route";
import courseRouter from "./course.route";
const mainRouter = express.Router();

mainRouter.use("/", userRouter);
mainRouter.use("/course", courseRouter);

export default mainRouter;
