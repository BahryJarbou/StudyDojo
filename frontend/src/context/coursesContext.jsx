import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    if (token) {
      axios
        .get("http://localhost:3000/courses", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setCourses(res.data);
        })
        .catch(console.error)
        .finally(() => {
          () => null;
        });
    }
  }, []);

  return (
    <CoursesContext value={{ courses, setCourses }}>{children}</CoursesContext>
  );
};

export { CoursesContext, CoursesProvider };
