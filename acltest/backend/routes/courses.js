const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");
const {
  findCourses,
  CourseDetails,
  findallcourses,
  selectdiscounts,alldiscounts, mostPopularCourse,
  GetUserType,findCoursesForTrainee

} = require("../controllers/coursescontroller");
router.get("/findcoursesfortrainee",findCoursesForTrainee);
router.get("/", findCourses);
router.get("/mostpopular", mostPopularCourse);

router.get('/coursedetails/:id' , CourseDetails)
router.post('/selectdiscounts', selectdiscounts)
router.post('/alldiscounts', alldiscounts)
router.get('/gettype', GetUserType);
router.get('/getallcourses', findallcourses);
module.exports = router;
