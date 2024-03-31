import express from "express";
import {
  registrationUser,
  activateUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUser,
  updateUser,
  updatePassword,
  updateAvatar,
} from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.route("/registration").post(registrationUser);
userRouter.route("/activateUser").post(activateUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").get(isAuthenticated, logoutUser);
userRouter.route("/refresh").get(updateAccessToken);
userRouter.route("/profile").get(isAuthenticated, getUser);
userRouter.route("/update-profile").put(isAuthenticated, updateUser);
userRouter.route("/update-password").put(isAuthenticated, updatePassword);
userRouter.route("/update-avatar").put(isAuthenticated, updateAvatar);
export default userRouter;
