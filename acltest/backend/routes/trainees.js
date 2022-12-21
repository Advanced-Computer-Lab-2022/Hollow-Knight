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
  getwallet,
  registercorporate,
  requestrefund,reportproblem
} = require("../controllers/traineescontroller");

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
router.get("/getwallet", getwallet);
router.post("/registercorporate", registercorporate);
router.post("/requestrefund", requestrefund);
router.post("/reportproblem", reportproblem);
module.exports = router;
