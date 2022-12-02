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
} = require("../controllers/instructorscontroller");

router.post("/", createInstructor);
router.patch("/", updateInstructorCountry);
const { searchCourse } = require("../controllers/instructorscontroller");

router.post("/search", searchCourse);
router.post("/search2", searchCourse2);

router.post("/addcourse", CreateCourse);
router.patch("/addexercise", addExercise);
router.patch("/updatecontract", UpdateContract);
router.delete("/deletecourse/:id", DeleteCourse);
router.post("/viewreviews", ViewReviews);
router.get("/reviews", ViewMyReviews);
router.get("/getcoursebyid", GetCourseById);
router.patch("/updatecourse/:id", UpdateCourse);

module.exports = router;
