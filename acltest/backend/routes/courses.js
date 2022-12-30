const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");
const {
  findCourses,
  CourseDetails,
  getCourse,
  selectdiscounts,alldiscounts, mostPopularCourse
} = require("../controllers/coursescontroller");

router.get("/", findCourses);
router.get("/mostpopular", mostPopularCourse);

router.get('/coursedetails/:id' , CourseDetails)
router.post('/selectdiscounts', selectdiscounts)
router.post('/alldiscounts', alldiscounts)

module.exports = router;
