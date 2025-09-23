import { Router } from "express";

import {
  getFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
} from "../controllers/flashcards.js";

const flashcardRouter = Router();

flashcardRouter.route("/").get(getFlashcards);
flashcardRouter
  .route("/:id")
  .get(getFlashcardById)
  .put(updateFlashcard)
  .delete(deleteFlashcard);

export default flashcardRouter;
