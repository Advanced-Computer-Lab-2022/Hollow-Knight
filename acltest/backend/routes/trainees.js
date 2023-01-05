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
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

router.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});
router.post("/create-payment-intent", async (req, res) => {
  try {
    console.log("backend")
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "US",
      amount: req.body.price,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});
module.exports = router;
