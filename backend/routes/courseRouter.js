import { Router } from "express";

import {
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courses.js";

const courseRouter = Router();

courseRouter.route("/").get(getCourses);
courseRouter
  .route("/:id")
  .get(getCourseById)
  .put(updateCourse)
  .delete(deleteCourse);

export default courseRouter;
