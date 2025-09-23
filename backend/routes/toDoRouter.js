import { Router } from "express";

import {
  getToDos,
  getToDoById,
  updateToDo,
  deleteToDo,
} from "../controllers/toDos.js";

const toDoRouter = Router();

toDoRouter.route("/").get(getToDos);
toDoRouter.route("/:id").get(getToDoById).put(updateToDo).delete(deleteToDo);

export default toDoRouter;
