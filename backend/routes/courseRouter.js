import { Router } from "express";

import {
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  createCourse,
  getCoursesCountByUserId,
} from "../controllers/courses.js";
import verifyToken from "../middlewares/auth.js";

const courseRouter = Router();

courseRouter
  .route("/")
  .get(verifyToken, getCourses)
  .post(verifyToken, createCourse);
courseRouter.route("/stats").get(verifyToken, getCoursesCountByUserId);
courseRouter
  .route("/:id")
  .get(getCourseById)
  .put(updateCourse)
  .delete(deleteCourse);

export default courseRouter;
