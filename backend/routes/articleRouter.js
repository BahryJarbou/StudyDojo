import { Router } from "express";

import verifyToken from "../middlewares/auth.js";

import {
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  createArticle,
  getArticlesCountByUserId,
} from "../controllers/articles.js";

const articleRouter = Router();

articleRouter.route("/").get(getArticles).post(verifyToken, createArticle);
articleRouter.route("/stats").get(verifyToken, getArticlesCountByUserId);
articleRouter
  .route("/:id")
  .get(getArticleById)
  .put(updateArticle)
  .delete(deleteArticle);

export default articleRouter;
