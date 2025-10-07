import { Router } from "express";

import {
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  createNote,
} from "../controllers/notes.js";

const noteRouter = Router();

noteRouter.route("/").get(getNotes).post(createNote);
noteRouter.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

export default noteRouter;
