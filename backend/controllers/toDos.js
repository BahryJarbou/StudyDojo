import ToDo from "../models/ToDo.js";

const getToDos = async (req, res) => {
  try {
    const toDos = await ToDo.find({ course: req.headers.course });
    res.status(200).json(toDos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createToDo = async (req, res) => {
  try {
    const {
      body,
      headers: { course },
    } = req;
    console.log(body);
    const toDo = await ToDo.create({ ...body, course });
    res.status(200).json(toDo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getToDoById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const toDo = await ToDo.findById(id);
    if (!toDo) return res.status(404).json({ error: "ToDo is not found" });
    res.status(200).json(toDo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateToDo = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const toDo = await ToDo.findByIdAndUpdate(id, req.body);
    if (!toDo) return res.status(404).json({ error: "ToDo is not found" });
    res.status(200).json(toDo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteToDo = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id);
    const toDo = await ToDo.findByIdAndDelete(id);
    if (!toDo) return res.status(404).json({ error: "ToDo is not found" });
    res.status(200).json({ message: "ToDo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getToDos, getToDoById, updateToDo, deleteToDo, createToDo };
