const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");
const {
  createCourse,
  findCourses,
} = require("../controllers/coursescontroller");

router.get("/", findCourses);

//router.get('/:id', getCourse)

router.post("/", createCourse);

module.exports = router;
