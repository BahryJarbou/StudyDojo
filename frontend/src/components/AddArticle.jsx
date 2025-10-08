import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "motion/react";
import axios from "axios";
import hostURL from "../server.js";

const AddArticle = ({ column, setArticles, courseID }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(``);
  const [adding, setAdding] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim().length) return;
    const newArticle = {
      column,
      title: title.trim(),
      content: content,
    };
    console.log(courseID);

    const token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .post(`${hostURL}/articles`, newArticle, {
        headers: { Authorization: token, course: courseID },
      })
      .then((res) => setArticles((pv) => [...pv, res.data]))
      .catch(console.error);
    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            placeholder="Article title..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            autoFocus
            placeholder="article markdown..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50 "
        >
          <span>Add Article</span> <FiPlus />
        </motion.button>
      )}
    </>
  );
};

export default AddArticle;
