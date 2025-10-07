import { useState } from "react";
import DropIndicator from "./DropIndicator";
import AddArticle from "./AddArticle";
import ArticleModal from "./ArticleModal";

const Column = ({
  title,
  headingColor,
  column,
  articles,
  setArticles,
  courseID,
}) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, article) => {
    e.dataTransfer.setData("articleId", article._id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const handleDragEnd = (e) => {
    const articleId = e.dataTransfer.getData("articleId");
    console.log(articleId);

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== articleId) {
      let copy = [...articles];

      let articleToTransfer = copy.find((c) => c._id === articleId);
      if (!articleToTransfer) return;
      articleToTransfer = { ...articleToTransfer, column };

      copy = copy.filter((c) => c._id !== articleId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(articleToTransfer);
      } else {
        const instertAtIndex = copy.findIndex((el) => el._id === before);
        if (instertAtIndex === undefined) return;

        copy.splice(instertAtIndex, 0, articleToTransfer);
      }
      setArticles(copy);
    }
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlights();
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => (i.style.opacity = 0));
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if ((offset < 0) & (offset > closest.offset)) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const filteredArticles = articles.filter((c) => c.column === column);

  return (
    <div className="w-[40vw] md:w-[50vw] shrink-0 p-2">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredArticles.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredArticles.map((c) => {
          return (
            <ArticleModal
              key={c._id}
              _id={c._id}
              title={c.title}
              content={c.content}
              column={c.column}
              course={c.course}
              handleDragStart={handleDragStart}
            />
          );
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddArticle
          courseID={courseID}
          column={column}
          setArticles={setArticles}
        />
      </div>
    </div>
  );
};

export default Column;
