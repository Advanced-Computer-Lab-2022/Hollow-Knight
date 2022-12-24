const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");
const {
  findCourses,
  CourseDetails,
  getCourse,
  GetUserType,
  selectdiscounts,alldiscounts
} = require("../controllers/coursescontroller");

router.get("/", findCourses);
router.get('/coursedetails/:id' , CourseDetails)
router.post('/selectdiscounts', selectdiscounts)
router.post('/alldiscounts', alldiscounts)
router.get('/gettype', GetUserType);
module.exports = router;
