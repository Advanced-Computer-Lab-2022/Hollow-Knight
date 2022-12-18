const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");
const {
  findCourses,
  CourseDetails,
  getCourse,
  selectdiscounts
} = require("../controllers/coursescontroller");

router.get("/", findCourses);
router.get('/coursedetails/:id' , CourseDetails)
router.post('/selectdiscounts', selectdiscounts)

module.exports = router;
