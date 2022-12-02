const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");
const {
  findCourses,
  CourseDetails,
  getCourse,
} = require("../controllers/coursescontroller");

router.get("/", findCourses);

module.exports = router;
