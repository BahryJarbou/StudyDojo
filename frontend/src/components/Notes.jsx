import { useRef, useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import axios from "axios";
import hostURL from "../server";

const Notes = ({ courseID }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .get(`${hostURL}/notes`, {
        headers: { Authorization: token, course: courseID },
      })
      .then((res) => setNotes((pv) => res.data))
      .catch(console.error);
  }, []);

  const containerRef = useRef(null);
  return (
    <>
      <div ref={containerRef} className="absolute inset-0 z-10">
        <AddNote setNotes={setNotes} courseID={courseID} />
        {notes.map((note) => {
          return (
            <Note
              key={note._id}
              _id={note._id}
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
