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
  getwallet,
  registercorporate,
  requestrefund,
  reportproblem,
  viewmyreports,
  addcomment
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
router.get("/getwallet", getwallet);
router.post("/registercorporate", registercorporate);
router.post("/requestrefund", requestrefund);
router.post("/reportproblem", reportproblem);
router.post("/addcomment", addcomment);
router.get("/viewmyreports", viewmyreports);
module.exports = router;
