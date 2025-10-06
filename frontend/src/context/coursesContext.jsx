import { createContext, useEffect, useState } from "react";
import axios from "axios";
import hostURL from "../server.js";

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCourseLoading] = useState(true);

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    if (token) {
      axios
        .get(`${hostURL}/courses`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          setCourses(res.data);
        })
        .catch(console.error)
        .finally(() => {
          setCourseLoading(false);
        });
    } else {
      setCourseLoading(false);
    }
  }, []);

  const createCourse = async ({ name, description }) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const { data } = await axios.post(
      `${hostURL}/courses`,
      {
        name,
        description,
      },
      { headers: { Authorization: token } }
    );
    setCourses((pv) => [...pv, data]);
  };

  const updateCourse = async ({ id, name, description, youtube, spotify }) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const { data } = await axios.put(
      `${hostURL}/courses/${id}`,
      { name, description, youtube, spotify },
      { headers: { Authorization: token } }
    );
    setCourses((pv) => pv.map((course) => (course._id === id ? data : course)));
    setCourses([...courses]);
  };

  const deleteCourse = async (courseID) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const { data } = await axios.delete(`${hostURL}/courses/${courseID}`, {
      headers: { Authorization: token },
    });
    setCourses((pv) => pv.filter((course) => course._id !== courseID));
  };

  return (
    <CoursesContext
      value={{
        courses,
        setCourses,
        createCourse,
        deleteCourse,
        updateCourse,
        coursesLoading,
      }}
    >
      {children}
    </CoursesContext>
  );
};

export { CoursesContext, CoursesProvider };
