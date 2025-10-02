import { useRef, useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(notes), [notes]);
  }, [notes]);

  useEffect(() => {
    const cardData = localStorage.getItem("cards");
    setNotes(cardData ? JSON.parse(cardData) : []);
    setHasChecked(true);
  }, []);

  const containerRef = useRef(null);
  return (
    <>
      <div ref={containerRef} className="absolute inset-0 z-10">
        <AddNote setNotes={setNotes} />
        {notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              containerRef={containerRef}
              rotate="6deg"
              top="20%"
              note={note}
              left="25%"
              className="w-36 md:w-56"
              setNotes={setNotes}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
