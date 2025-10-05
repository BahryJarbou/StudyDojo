import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    if (token) {
      axios
        .get("http://localhost:3000/courses", {
          headers: { Authorization: token },
        })
        .then((res) => {
          setCourses(res.data);
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const createCourse = async ({ name, description }) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const { data } = await axios.post(
      "http://localhost:3000/courses",
      {
        name,
        description,
      },
      { headers: { Authorization: token } }
    );
    setCourses((pv) => [...pv, data]);
  };

  const updateCourse = async ({
    id,
    name,
    description,
    ytEmbed,
    spotifyEmbed,
  }) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const { data } = await axios.put(
      `http://localhost:3000/courses/${id}`,
      { name, description, ytEmbed, spotifyEmbed },
      { headers: { Authorization: token } }
    );
    setCourses((pv) => pv.map((course) => (course._id === id ? data : course)));
  };

  const deleteCourse = async (courseID) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const { data } = await axios.delete(
      `http://localhost:3000/courses/${courseID}`,
      {
        headers: { Authorization: token },
      }
    );
    setCourses((pv) => pv.filter((course) => course._id !== courseID));
  };

  return (
    <CoursesContext
      value={{ courses, setCourses, createCourse, deleteCourse, updateCourse }}
    >
      {children}
    </CoursesContext>
  );
};

export { CoursesContext, CoursesProvider };
