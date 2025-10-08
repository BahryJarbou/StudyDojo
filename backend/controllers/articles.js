import Article from "../models/article.js";

const getArticles = async (req, res) => {
  try {
    const {
      headers: { course },
    } = req;
    const article = await Article.find({ course: course });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createArticle = async (req, res) => {
  try {
    const {
      headers: { course },
    } = req;
    const article = await Article.create({
      ...req.body,
      user: req.user._id,
      course,
    });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getArticleById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const article = await Article.findById(id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getArticlesCountByUserId = async (req, res) => {
  try {
    const articlesCount = await Article.countDocuments({ user: req.user._id });
    res.status(200).json(articlesCount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const article = await Article.findByIdAndUpdate(id, req.body);
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const article = await Article.findByIdAndDelete(id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.status(200).json({ message: "Article deleted succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  createArticle,
  getArticlesCountByUserId,
};
