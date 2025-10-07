import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "motion/react";
import axios from "axios";
import hostURL from "../server";

const AddNote = ({ setNotes, courseID }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [adding, setAdding] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim().length) return;
    if (!content.trim().length) return;
    const newNote = {
      title: title.trim(),
      content: content.trim(),
    };
    axios
      .post(`${hostURL}/notes`, newNote, {
        headers: { course: courseID },
      })
      .then((res) => setNotes((pv) => [...pv, res.data]))
      .catch(console.error);
    setAdding(false);
  };

  return (
    <div className="absolute top-0 left-0">
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            required
            placeholder="Add A Title..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />

          <textarea
            onChange={(e) => setContent(e.target.value)}
            autoFocus
            required
            placeholder="Add Some Content..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button type="submit" className="btn btn-soft btn-success">
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="btn btn-soft btn-success "
        >
          <span>Add Note</span> <FiPlus />
        </motion.button>
      )}
    </div>
  );
};

export default AddNote;
