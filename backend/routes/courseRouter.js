import { Router } from "express";

import {
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  createCourse,
} from "../controllers/courses.js";
import verifyToken from "../middlewares/auth.js";

const courseRouter = Router();

courseRouter
  .route("/")
  .get(verifyToken, getCourses)
  .post(verifyToken, createCourse);
courseRouter
  .route("/:id")
  .get(getCourseById)
  .put(updateCourse)
  .delete(deleteCourse);

export default courseRouter;
