const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");
const {
  findCourses,
  CourseDetails,
  getCourse,
} = require("../controllers/coursescontroller");
const   requireAuth  = require("../middleware/requireAuth");

router.use(requireAuth);//lock all routes in this file
router.get("/", findCourses);
router.get('/coursedetails/:id' , CourseDetails)

module.exports = router;
