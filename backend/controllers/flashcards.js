import Flashcard from "../models/Flashcard.js";

const getFlashcards = async (req, res) => {
  try {
    const {
      headers: { course },
    } = req;
    const flashcards = await Flashcard.find({ course: course });
    res.status(200).json(flashcards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFlashcard = async (req, res) => {
  try {
    const {
      headers: { course },
    } = req;
    const flashcard = await Flashcard.create({
      ...req.body,
      user: req.user._id,
      course,
    });
    res.status(200).json(flashcard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFlashcardsCountByUserId = async (req, res) => {
  try {
    const flashcardsCount = await Flashcard.countDocuments({
      user: req.user._id,
    });
    res.status(200).json(flashcardsCount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFlashcardById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const flashcard = await Flashcard.findById(id);
    if (!flashcard)
      return res.status(404).json({ error: "Flashcard not found" });
    res.status(200).json(flashcard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFlashcard = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const flashcard = await Flashcard.findByIdAndUpdate(id, req.body);
    if (!flashcard)
      return res.status(404).json({ error: "Flashcard not found" });
    res.status(200).json(flashcard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFlashcard = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const flashcard = await Flashcard.findByIdAndDelete(id);
    if (!flashcard)
      return res.status(404).json({ error: "Flashcard not found" });
    res.status(200).json({ message: "Flashcard deleted succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
  createFlashcard,
  getFlashcardsCountByUserId,
};
