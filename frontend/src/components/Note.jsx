import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import axios from "axios";
import hostURL from "../server";

const Note = ({ containerRef, top, left, _id, note, className, setNotes }) => {
  const [zIndex, setZIndex] = useState(0);
  const handleDelete = () => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .delete(`${hostURL}/notes/${_id}`, { headers: { Authorization: token } })
      .then((res) => setNotes((pv) => pv.filter((note) => note._id !== _id)))
      .catch(console.error);
  };

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );
      if (!isNaN(zIndex) && zIndex > maxZIndex) maxZIndex = zIndex;
    });
    setZIndex(maxZIndex + 1);
  };
  return (
    <motion.div
      onMouseDown={updateZIndex}
      drag
      dragConstraints={containerRef}
      dragMomentum={true}
      dragElastic={0.01}
      style={{ top, left, zIndex }}
      className={twMerge(
        "drag-elements rounded absolute flex flex-col justify-center  bg-amber-100 text-black m-w-[20%] m-h-[20%] shrink-0 p-1 pb-4",
        className
      )}
    >
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-md md:text-2xl">{note.title}</h2>
          <p className="text-xs lg:text-md">{note.content}</p>
        </div>
        <button
          onClick={handleDelete}
          className="btn btn-soft btn-warning btn-xs"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Note;
