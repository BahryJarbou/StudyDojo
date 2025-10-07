import Note from "../models/Note.js";

const getNotes = async (req, res) => {
  try {
    const {
      headers: { course },
    } = req;
    const notes = await Note.find({ course });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const {
      headers: { course },
    } = req;
    const note = await Note.create({ ...req.body, course });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const note = Note.findByIdAndUpdate(id, req.body);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const note = await Note.findByIdAndDelete(id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getNotes, getNoteById, updateNote, deleteNote, createNote };
