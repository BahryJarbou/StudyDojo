import { motion } from "motion/react";
import Board from "./Board";
const Articles = ({ courseID }) => {
  return (
    <div className="h-full w-full p-4 bg-neutral-900 text-neutral-50">
      <Board courseID={courseID} />
    </div>
  );
};

export default Articles;
