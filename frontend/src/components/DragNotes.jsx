import { useState } from "react";
import Notes from "./Notes";

const DragNotes = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950 ">
      <Notes />
    </section>
  );
};

export default DragNotes;
