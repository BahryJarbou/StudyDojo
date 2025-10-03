import { FiBook } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState, use } from "react";
import { CoursesContext } from "../context/coursesContext";
import { NavLink } from "react-router";

const CoursesAccordion = () => {
  const { courses } = use(CoursesContext);
  const [open, setOpen] = useState(courses[0]._id);
  return (
    <section className="p-4 bg-success">
      <div className="flex flex-col lg:flex-row h-[70vh] lg:h-[70vh] w-[60vw] shrink-0 max-w-6xl mx-auto shadow overflow-hidden">
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
  );
};

const Panel = ({ open, setOpen, id, title, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-base-100 text-success hover:text-base-100 hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-base-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-success text-white grid place-items-center">
          <FiBook />
        </div>

        <span className="w-4 h-4 bg-base-100 group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-base-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
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
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col w-full justify-between h-full shrink-0 px-4 py-2 bg-black/60 backdrop-blur-sm text-white"
            >
              <p className="text-success">{description}</p>
              <div className="flex place-self-end gap-4 justify-self-end justify-end">
                <button className="btn btn-soft btn-success btn-xs md:btn-md lg:btn-xl">
                  Edit Course
                </button>
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
    width: "100%",
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
