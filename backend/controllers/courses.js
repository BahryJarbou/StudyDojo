import Course from "../models/Course.js";

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const course = await Course.findOne(id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const course = await Course.findByIdAndUpdate(id, req.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const course = await Course.findByIdAndDelete(id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.status(200).json({ message: "Course Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getCourses, getCourseById, updateCourse, deleteCourse };
