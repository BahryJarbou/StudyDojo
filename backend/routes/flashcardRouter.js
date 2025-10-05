import { Router } from "express";

import verifyToken from "../middlewares/auth.js";

import {
  getFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
  createFlashcard,
} from "../controllers/flashcards.js";

const flashcardRouter = Router();

flashcardRouter.route("/").get(getFlashcards).post(createFlashcard);
flashcardRouter
  .route("/:id")
  .get(getFlashcardById)
  .put(updateFlashcard)
  .delete(deleteFlashcard);

export default flashcardRouter;
