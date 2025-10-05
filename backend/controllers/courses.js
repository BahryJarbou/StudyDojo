import Course from "../models/Course.js";

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ user: req.user._id });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const {
      body: { name, description },
    } = req;
    const course = await Course.create({
      name,
      user: req.user._id,
      description,
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const course = await Course.findById(id);
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
    res.status(200).json(course);
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

export { getCourses, getCourseById, updateCourse, deleteCourse, createCourse };
