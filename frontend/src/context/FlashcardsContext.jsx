import { createContext, useState } from "react";
import axios from "axios";

const FlashcardContext = createContext();

const FlashcardsProvider = ({ children }) => {
  const [hasChanged, setHasChanged] = useState(false);

  return (
    <FlashcardContext value={{ hasChanged, setHasChanged }}>
      {children}
    </FlashcardContext>
  );
};

export { FlashcardContext, FlashcardsProvider };
