const express = require("express");
const router = express.Router();
const Trainee = require("../models/Trainees");
const {
  createTrainee,
  updateCourseRating,
} = require("../controllers/traineescontroller");

router.post("/", createTrainee);
router.patch("/", updateCourseRating);
module.exports = router;
