import express from "express";
import { registrationUser, activateUser } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.route("/registration").post(registrationUser);
userRouter.route("/activateUser").post(activateUser);

export default userRouter;
