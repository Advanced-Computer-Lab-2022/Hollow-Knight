const express = require("express");
const router = express.Router();
const Instructor = require("../models/Instructors");
const {
  createInstructor,
  updateInstructorCountry,
  CreateCourse,
  searchCourse2,
  ViewReviews,
  addExercise,
  ViewMyReviews,
  DeleteCourse,
  UpdateCourse,
  GetCourseById,
  UpdateContract,
  updatemailbiogrpahy,
  applydiscount,
  viewmycourses,
  rateinstructor,
  CreateSchedule,
  viewmysubtitles,
  uploadvideo
} = require("../controllers/instructorscontroller");
const { searchCourseInstructor } = require("../controllers/instructorscontroller");

const   requireAuth  = require("../middleware/requireAuth");

router.post("/search2", searchCourse2); //this is a public route //because it is not locked by requireAuth middleware //youssef
router.use(requireAuth);//lock all routes in  file 
router.post("/", createInstructor);
router.patch("/", updateInstructorCountry);

router.post("/searchInstructor/:token", searchCourseInstructor);

router.post("/addcourse", CreateCourse);
router.patch("/addexercise", addExercise);
router.patch("/updatecontract", UpdateContract);
router.delete("/deletecourse/:id", DeleteCourse);
router.post("/viewreviews", ViewReviews);
router.get("/reviews", ViewMyReviews);
router.get("/getcoursebyid", GetCourseById);
router.patch("/updatecourse/:id", UpdateCourse);
router.post('/updateinfo', updatemailbiogrpahy)
router.get('/viewmycourses', viewmycourses)
router.post('/applydiscount', applydiscount)
router.post('/rate', rateinstructor)
router.post('/addsubtitle', CreateSchedule)
router.get('/viewmysubtitles', viewmysubtitles)
router.post('/uploadvideo', uploadvideo)


module.exports = router;
