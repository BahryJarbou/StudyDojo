import axios from "axios";
import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import hostURL from "../server.js";

const BurnBarrel = ({ setArticles }) => {
  const [active, setActive] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const articleId = e.dataTransfer.getData("articleId");
    const token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .delete(`${hostURL}/articles/${articleId}`, {
        headers: { Authorization: token },
      })
      .then((res) => setArticles((pv) => pv.filter((c) => c._id !== articleId)))
      .catch(console.error);
    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-1 grid h-[5vw] w-[5vw] lg:h-[25vw] lg:w-[25vw] shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-600 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};
export default BurnBarrel;
