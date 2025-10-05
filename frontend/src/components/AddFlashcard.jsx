import { use, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "motion/react";
import axios from "axios";
import { FlashcardContext } from "../context/FlashcardsContext";

const AddFlashcard = ({ courseID }) => {
  const { setHasChanged } = use(FlashcardContext);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim().length) return;
    if (!answer.trim().length) return;
    const newCard = {
      question: question.trim(),
      answer: answer.trim(),
    };

    axios
      .post("http://localhost:3000/flashcards", newCard, {
        headers: {
          course: courseID,
        },
      })
      .then((res) => {})
      .catch(console.error)
      .finally(() => {
        () => null;
      });
    setAdding(false);
    setHasChanged((pv) => !pv);
  };

  return (
    <div className="absolute top-0 left-0">
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <input
            onChange={(e) => setQuestion(e.target.value)}
            autoFocus
            required
            placeholder="Enter The Question Here..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />

          <textarea
            onChange={(e) => setAnswer(e.target.value)}
            autoFocus
            required
            placeholder="Enter The Answer Here..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs btn text-neutral-400 transition-colors hover:text-neutral-50"
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
        <>
          <motion.button
            layout
            onClick={() => setAdding(true)}
            className="btn btn-soft btn-success "
          >
            <span>Add FlashCard</span> <FiPlus />
          </motion.button>
        </>
      )}
    </div>
  );
};

export default AddFlashcard;
