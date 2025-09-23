import Flashcard from "../models/Flashcard";

const getFlashcards = async (req, res) => {
  try {
    const flashCards = await Flashcard.find();
    res.status(200).json(flashCards);
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFlashcards = async (req, res) => {
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

export { getFlashcards, getFlashcardById, updateFlashcards, deleteFlashcard };
