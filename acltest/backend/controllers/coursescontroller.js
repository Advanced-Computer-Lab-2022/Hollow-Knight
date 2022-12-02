const { default: mongoose } = require("mongoose");
const Course = require("../models/Courses");

const findCourses = async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json(courses);
};
module.exports = {
  findCourses,
};
