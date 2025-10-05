import { AuthContext } from "../context/AuthProvider";
import { use, useState } from "react";
import { Navigate } from "react-router";
import { CoursesContext } from "../context/coursesContext";
import CoursesAccordion from "../components/CoursesAccordion";

const Courses = () => {
  const { user, loading } = use(AuthContext);
  const { createCourse } = use(CoursesContext);
  const [form, setForm] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    createCourse(form);
  };

  return !loading ? (
    !user ? (
      <Navigate to="/" />
    ) : !loading ? (
      <div className="flex flex-col justify-center gap-[4vh] shrink-0">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-soft btn-success"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Create New Course
        </button>
        <dialog id="my_modal_1" className="modal modal-backdrop text-success">
          <div className="modal-box max-w-screen w-screen lg:h-fit lg:w-fit">
            <h3 className="font-bold text-lg">
              Enter the name of the course to create it!
            </h3>
            <div className="modal-action ">
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
                    New Course
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

                  <button className="btn btn-soft btn-success mt-4">
                    Create
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </dialog>

        <CoursesAccordion />
      </div>
    ) : (
      <span className=" absolute translate-1/2 top-[50%] left-[50%] loading loading-spinner loading-xl"></span>
    )
  ) : (
    <span className=" absolute translate-1/2 top-[50%] left-[50%] loading loading-spinner loading-xl"></span>
  );
};

export default Courses;
