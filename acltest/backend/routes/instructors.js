const express = require("express");
const  requireAuth  = require("../middleware/requireAuth");
const router = express.Router();
const Instructor = require("../models/Instructors");
const {
  createInstructor,
  updateInstructorCountry,
  CreateCourse,
  searchCourse2,
  ViewReviews,
  addExercise,
  getmonthlypay,
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
  uploadvideo,
  getuserfrominsid,
  getinstructorfromuserid,
  addExam,
} = require("../controllers/instructorscontroller");
router.use(requireAuth);
router.post("/", createInstructor);
router.patch("/", updateInstructorCountry);
const { searchCourse } = require("../controllers/instructorscontroller");

router.post("/search", searchCourse);
router.post("/search2", searchCourse2);

router.post("/addcourse", CreateCourse);
router.patch("/addexercise", addExercise);
router.patch("/addexam", addExam);
router.patch("/updatecontract", UpdateContract);
router.delete("/deletecourse/:id", DeleteCourse);
router.post("/viewreviews", ViewReviews);

router.get("/getcoursebyid", GetCourseById);
router.patch("/updatecourse/:id", UpdateCourse);
router.post('/updateinfo', updatemailbiogrpahy)
router.get('/viewmycourses', viewmycourses)
router.patch('/applydiscount', applydiscount)
router.post('/rate', rateinstructor)
router.post('/addsubtitle', CreateSchedule)
router.get('/viewmysubtitles', viewmysubtitles)
router.get('/getname', getuserfrominsid)
router.post('/uploadvideo', uploadvideo)
router.get('/getinst', getinstructorfromuserid)
router.get('/getpay', getmonthlypay)


module.exports = router;
