import Notes from "./Notes";

const DragNotes = ({ courseID }) => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950 ">
      <Notes courseID={courseID} />
    </section>
  );
};

export default DragNotes;
