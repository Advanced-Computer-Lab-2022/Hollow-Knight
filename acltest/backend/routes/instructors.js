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
  searchCourse,
  getuserfromuserid,
  uploadpreviewvideo,
  publishcourse,
  closecourse,
  DeleteSub,

} = require("../controllers/instructorscontroller");

        



router.post("/search2", searchCourse2); //this is a public route //because it is not locked by requireAuth middleware //youssef
router.use(requireAuth);
router.post("/", createInstructor);
router.patch("/", updateInstructorCountry);

router.post("/search", searchCourse);

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
router.get('/getuser', getuserfromuserid)
router.post('/addpreviewvideo', uploadpreviewvideo)
router.patch("/publishcourse", publishcourse);
router.patch("/closecourse", closecourse);
router.delete("/deletesub/:id", DeleteSub);
module.exports = router;
