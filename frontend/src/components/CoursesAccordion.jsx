import { FiBook } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState, use } from "react";
import { CoursesContext } from "../context/coursesContext";
import { NavLink } from "react-router";

const CoursesAccordion = () => {
  const { courses, loading } = use(CoursesContext);
  const [open, setOpen] = useState(courses[0]._id);

  return !loading ? (
    <section className="p-4 bg-success">
      <div
        className={`flex flex-col max-w-[85vw] w-[85vw] shrink-0 mx-auto shadow overflow-hidden`}
      >
        {courses.map((course) => {
          return (
            <Panel
              key={course._id}
              open={open}
              setOpen={setOpen}
              id={course._id}
              title={course.name}
              description={course.description || ""}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <span className=" absolute translate-1/2 top-[50%] left-[50%] loading loading-spinner loading-xl"></span>
  );
};

const Panel = ({ open, setOpen, id, title, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  const { deleteCourse, updateCourse } = use(CoursesContext);
  const [form, setForm] = useState({
    name: title,
    description: description,
    ytEmbed: "",
    spotifyEmbed: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    updateCourse({ id, ...form });
  };

  return (
    <>
      <button
        className="bg-base-100 text-success hover:text-base-100 hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-base-200 flex flex-row-reverse  justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block text-xl font-light">{title}</span>
        <div className="w-6 aspect-square bg-success text-white grid place-items-center">
          <FiBook />
        </div>

        <span
          className="w-4 h-4 bg-base-100 group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px]  border-base-200 rotate-45 absolute bottom-0  right-[50%] 
         translate-y-[50%] translate-x-[50%] z-20"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="min-w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col w-full justify-between grow shrink-0 px-4 py-2 bg-black/60 backdrop-blur-sm text-white"
            >
              <p className="text-success whitespace-pre-wrap">{description}</p>
              <div className="flex place-self-end gap-4 justify-self-end justify-end">
                <button
                  className="btn btn-soft btn-success btn-xs md:btn-md lg:btn-xl"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Update Course
                </button>
                <dialog
                  id="my_modal_2"
                  className="modal modal-backdrop text-success"
                >
                  <div className="modal-box max-w-screen w-screen lg:h-fit lg:w-fit">
                    <h3 className="font-bold text-lg">Course Data</h3>
                    <div className="modal-action flex-col">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-success absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <form
                        method="dialog"
                        onSubmit={handleSubmit}
                        className="flex items-center justify-center p-8 rounded shadow-md w-[90vw]"
                      >
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[100%] lg:w-[100%] border p-4">
                          <legend className="fieldset-legend lg:text-4xl text-success">
                            Update Course
                          </legend>

                          <label className="label" htmlFor="name">
                            Name *
                          </label>
                          <input
                            className="input validator border-success w-full"
                            required
                            placeholder="enter course's name"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="course name"
                          />

                          <label className="label" htmlFor="description">
                            Description
                          </label>
                          <textarea
                            className="input validator border-success w-full text-wrap"
                            placeholder="description"
                            minlength="8"
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            autoComplete="description"
                          />

                          <label className="label" htmlFor="ytEmbed">
                            Youtube Embed Link
                          </label>
                          <textarea
                            className="input validator border-success w-full text-wrap"
                            placeholder="ytEmbed"
                            minlength="8"
                            id="ytEmbed"
                            name="ytEmbed"
                            value={form.ytEmbed}
                            onChange={handleChange}
                            autoComplete="ytEmbed"
                          />

                          <label className="label" htmlFor="spotifyEmbed">
                            Spotify Embed Link
                          </label>
                          <textarea
                            className="input validator border-success w-full text-wrap"
                            placeholder="spotifyEmbed"
                            minlength="8"
                            id="spotifyEmbed"
                            name="spotifyEmbed"
                            value={form.spotifyEmbed}
                            onChange={handleChange}
                            autoComplete="spotifyEmbed"
                          />

                          <button className="btn btn-soft btn-success mt-4">
                            Update
                          </button>
                        </fieldset>
                      </form>
                      <button
                        onClick={() => {
                          deleteCourse(id);
                          document.getElementById("my_modal_2").close();
                        }}
                        className="btn btn-soft btn-warning mt-4"
                      >
                        Delete Course
                      </button>
                    </div>
                  </div>
                </dialog>
                <NavLink
                  to={`${id}`}
                  className="btn btn-soft btn-success btn-xs md:btn-md lg:btn-xl"
                >
                  View Course
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CoursesAccordion;

const panelVariants = {
  open: {
    width: "60vw",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "100%",
    height: "0%",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};
