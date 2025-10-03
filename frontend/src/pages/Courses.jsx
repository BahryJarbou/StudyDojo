import CourseContent from "../components/CourseContent";
import Home from "./Home";
import { AuthContext } from "../context/AuthProvider";
import { use } from "react";
import { Navigate } from "react-router";
import { CoursesContext } from "../context/coursesContext";
import CoursesAccordion from "../components/CoursesAccordion";

const Courses = () => {
  const { user, loading } = use(AuthContext);
  const { courses, setCourses } = use(CoursesContext);

  return !loading ? (
    !user ? (
      <Navigate to="/" />
    ) : (
      <CoursesAccordion />
    )
  ) : (
    <span className="loading loading-spinner loading-xl"></span>
  );
};

export default Courses;
