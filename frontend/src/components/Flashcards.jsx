import { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import move from "lodash-move";
import CardFlip from "./CardFlip";
import axios from "axios";
import AddFlashcard from "./AddFlashcard";
import { FlashcardContext } from "../context/FlashcardsContext";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const cardStyle = {
  position: "relative",
  // transformOrigin: "top center",
  listStyle: "none",
};

const Flashcards = ({ courseID }) => {
  return (
    <section className="relative flex justify-center items-center min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      {/* <AddFlashcard courseID={courseID} /> */}
      <FlashcardsStack courseID={courseID} />
    </section>
    // <div className="relative flex justify-center items-center height-screen">
    // </div>
  );
};

export default Flashcards;

const FlashcardsStack = ({ courseID }) => {
  const { hasChanged } = use(FlashcardContext);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    if (token) {
      axios
        .get("http://localhost:3000/flashcards", {
          headers: {
            Authorization: token,
            course: courseID,
          },
        })
        .then((res) => {
          setCards(res.data);
        })
        .catch(console.error)
        .finally(() => {
          () => null;
        });
    }
  }, [hasChanged]);

  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };
  return (
    <ul className="relative w-full h-[70vh] !list-none !m-0 !p-0">
      {cards.map((flashCard, index) => {
        const canDrag = index === 0;

        return (
          <motion.li
            key={flashCard._id}
            style={{
              ...cardStyle,
              backgroundColor: "gray",
              cursor: canDrag ? "grab" : "auto",
            }}
            animate={{
              top: 100 + index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
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
              id={flashCard._id}
              setCards={setCards}
            />
          </motion.li>
        );
      })}
    </ul>
  );
};
