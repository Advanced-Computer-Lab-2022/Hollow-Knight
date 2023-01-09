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
  getexam,
  viewmyreports,
  addcomment,
  updateTraineeInfo,
  isRegistered
} = require("../controllers/traineescontroller");
const  requireAuth  = require("../middleware/requireAuth");
router.use(requireAuth);


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
router.patch("/getexam", getexam);

router.post("/addcomment", addcomment);
router.get("/viewmyreports", viewmyreports);
router.patch("/updateinfo", updateTraineeInfo);
router.patch("/isregistered", isRegistered);

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

router.get("/config", (req, res) => {
  console.log("hreeee")
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});
router.post("/create-payment-intent", async (req, res) => {
  console.log(req.body)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: 2000,
      automatic_payment_methods: { enabled: true },
    });
    console.log(paymentIntent.client_secret);
    // Send publishable key and PaymentIntent details to client
    return res.send({
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
