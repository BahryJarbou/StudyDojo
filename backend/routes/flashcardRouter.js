import { Router } from "express";

import verifyToken from "../middlewares/auth.js";

import {
  getFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
} from "../controllers/flashcards.js";

const flashcardRouter = Router();

flashcardRouter.route("/").get(verifyToken, getFlashcards);
flashcardRouter
  .route("/:id")
  .get(getFlashcardById)
  .put(updateFlashcard)
  .delete(deleteFlashcard);

export default flashcardRouter;
