import { Router } from "express";

import {
  getToDos,
  getToDoById,
  updateToDo,
  deleteToDo,
  createToDo,
} from "../controllers/toDos.js";

const toDoRouter = Router();

toDoRouter.route("/").get(getToDos).post(createToDo);
toDoRouter.route("/:id").get(getToDoById).put(updateToDo).delete(deleteToDo);

export default toDoRouter;
