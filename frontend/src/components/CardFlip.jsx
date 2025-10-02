import { useState, useRef } from "react";
import { motion } from "motion/react";
import Card from "./Card";

const CardFlip = ({ question, answer, flippable }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const state = useRef({ y: 0 });
  const handleMouseDown = (e) => {
    state.current.y = e.screenY;
  };

  const handleFlip = (e) => {
    const delta = Math.abs(e.screenY - state.current.y);

    if (delta > 10) {
      return;
    }
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };
  return (
    <div className="flex items-center justify-center bg-black cursor-pointer">
      <div
        className="flip-card w-[14rem] md:w-[24rem] rounded-md"
        onMouseDown={handleMouseDown}
        onClick={flippable ? handleFlip : () => null}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "alternate" }}
          onAnimationComplete={() => {
            setIsAnimating(false);
          }}
        >
          <div className="flip-card-front">
            <Card title="Question" content={question} />
          </div>
          <div className="flip-card-back">
            <Card title="Answer" content={answer} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
