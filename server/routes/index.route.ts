import express from "express";
import userRouter from "./user.route";

const mainRouter = express.Router();

mainRouter.use("/", userRouter);

export default mainRouter;
