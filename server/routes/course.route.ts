import express from "express";
import { createCourse } from "../controllers/course.controller";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";

const courseRouter = express.Router();

courseRouter.route("/create-course").post(isAuthenticated, createCourse);

export default courseRouter;
