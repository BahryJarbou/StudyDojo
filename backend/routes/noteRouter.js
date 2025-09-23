import { Router } from "express";

import {
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const noteRouter = Router();

noteRouter.route("/").get(getNotes);
noteRouter.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

export default noteRouter;
