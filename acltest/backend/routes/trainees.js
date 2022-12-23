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
  increaseTraineeProgression,
  giveAllVideosToTrainee,
} = require("../controllers/traineescontroller");

router.post("/", createTrainee);
router.patch("/ratecourse", updateCourseRating);
router.patch("/coursevideos", watchVideo);
router.patch("/getgrade", getExerciseGrade);
router.patch("/addexercise", addExercise);
router.patch("/gettraineecourses", getTraineeCourses);
router.patch("/getanswers", ViewCorrectAnswers);
router.post("/addcoursetotrainee", addCourseToTrainee);
router.get("/getmycourses", FindCourses);
router.get("/getsubtitles", GetCourseSubtitles);
router.patch("/increasetraineeprog", increaseTraineeProgression);
router.patch("/videos", giveAllVideosToTrainee);
module.exports = router;
