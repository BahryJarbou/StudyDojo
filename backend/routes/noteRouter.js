import { Router } from "express";

import {
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  createNote,
  getnotesCountByUserId,
} from "../controllers/notes.js";
import verifyToken from "../middlewares/auth.js";

const noteRouter = Router();

noteRouter.route("/").get(getNotes).post(verifyToken, createNote);
noteRouter.route("/stats").get(verifyToken, getnotesCountByUserId);
noteRouter.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

export default noteRouter;
