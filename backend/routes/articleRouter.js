import { Router } from "express";

import verifyToken from "../middlewares/auth.js";

import {
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  createArticle,
} from "../controllers/articles.js";

const articleRouter = Router();

articleRouter.route("/").get(getArticles).post(createArticle);
articleRouter
  .route("/:id")
  .get(getArticleById)
  .put(updateArticle)
  .delete(deleteArticle);

export default articleRouter;
