const express = require("express");
const router = express.Router();
const Trainee = require("../models/Trainees");
const {
  createTrainee,
  updateCourseRating,
  watchVideo,
  getExerciseGrade,
  addExercise,
  getTraineeCourses,
  addCourseToTrainee,
  ViewCorrectAnswers,
  FindCourses,
  GetCourseSubtitles,
} = require("../controllers/traineescontroller");
const  requireAuth  = require("../middleware/requireAuth");
router.use(requireAuth);


router.post("/", createTrainee);
router.patch("/ratecourse", updateCourseRating);
router.patch("/coursevideos", watchVideo);
router.patch("/getgrade", getExerciseGrade);
router.patch("/addexercise", addExercise);
router.patch("/gettraineecourses", getTraineeCourses);
router.patch("/addcoursetotrainee", addCourseToTrainee);
router.patch("/getanswers", ViewCorrectAnswers);
router.get("/getmycourses", FindCourses);
router.get("/getsubtitles", GetCourseSubtitles);
module.exports = router;
