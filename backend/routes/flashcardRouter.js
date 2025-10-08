import { Router } from "express";

import verifyToken from "../middlewares/auth.js";

import {
  getFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
  createFlashcard,
  getFlashcardsCountByUserId,
} from "../controllers/flashcards.js";

const flashcardRouter = Router();

flashcardRouter
  .route("/")
  .get(getFlashcards)
  .post(verifyToken, createFlashcard);
flashcardRouter.route("/stats").get(verifyToken, getFlashcardsCountByUserId);
flashcardRouter
  .route("/:id")
  .get(getFlashcardById)
  .put(updateFlashcard)
  .delete(deleteFlashcard);

export default flashcardRouter;
