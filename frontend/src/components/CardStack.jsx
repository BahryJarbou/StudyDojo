import { useState } from "react";
import { motion } from "motion/react";
import move from "lodash-move";
import CardFlip from "./CardFlip";

const FLASHCARDS = [
  { question: "A", answer: "A" },
  { question: "B", answer: "B" },
  { question: "C", answer: "C" },
  { question: "D", answer: "D" },
];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const cardStyle = {
  position: "relative",
  // transformOrigin: "top center",
  listStyle: "none",
};

const CardStack = () => {
  const [cards, setCards] = useState(FLASHCARDS);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    // <div className="relative flex justify-center items-center height-screen">
    <ul className="relative w-full h-[70vh] ">
      {cards.map((flashCard, index) => {
        const canDrag = index === 0;

        return (
          <motion.li
            key={flashCard.question}
            style={{
              ...cardStyle,
              backgroundColor: "gray",
              cursor: canDrag ? "grab" : "auto",
            }}
            animate={{
              top: 100 + index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: FLASHCARDS.length - index,
            }}
            drag={canDrag ? "y" : false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            onDragEnd={() => {
              moveToEnd(index);
            }}
          >
            <CardFlip
              question={flashCard.question}
              answer={flashCard.answer}
              flippable={canDrag}
            />
          </motion.li>
        );
      })}
    </ul>
    // </div>
  );
};

export default CardStack;
