import { Router } from "express";

import {
  getToDos,
  getToDoById,
  updateToDo,
  deleteToDo,
  createToDo,
  getToDosCountByUserId,
} from "../controllers/toDos.js";
import verifyToken from "../middlewares/auth.js";

const toDoRouter = Router();

toDoRouter.route("/").get(getToDos).post(verifyToken, createToDo);
toDoRouter.route("/stats").get(verifyToken, getToDosCountByUserId);
toDoRouter.route("/:id").get(getToDoById).put(updateToDo).delete(deleteToDo);
export default toDoRouter;
