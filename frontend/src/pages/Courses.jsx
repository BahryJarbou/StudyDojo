import CourseContent from "../components/CourseContent";
import Home from "./Home";
import { AuthContext } from "../context/AuthProvider";
import { use } from "react";
import { Navigate } from "react-router";

const Courses = () => {
  const { user, loading } = use(AuthContext);
  return !loading ? (
    !user ? (
      <Navigate to="/" />
    ) : (
      <CourseContent />
    )
  ) : (
    <span className="loading loading-spinner loading-xl"></span>
  );
};

export default Courses;
