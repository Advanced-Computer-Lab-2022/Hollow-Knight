const Trainee = require("../models/Trainees");
const Course = require("../models/Courses");
const Subtitle = require("../models/Subtitles");
const createTrainee = async (req, res) => {
  const { name, password } = req.body;

  try {
    const trainee = await Trainee.create({ name, password });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "user added" });
};
const updateCourseRating = async (req, res) => {
  const { title, rating, id } = req.body;
  const course = await Course.findOne({ title });
  const updatedArray = course.review;
  console.log(course.review);
  const searchedRating = updatedArray.find(
    (element) => element.traineeId == id
  );
  if (searchedRating == null) {
    updatedArray.push({ rating: rating, traineeId: id });
    const updated = await Course.findOneAndUpdate(
      { title },
      { review: updatedArray }
    );
    return res.status(200).json(rating);
  } else {
    for (const obj of updatedArray) {
      if (obj.traineeId == id) {
        obj.rating = rating;
        break;
      }
    }
    const updated = await Course.findOneAndUpdate(
      { title },
      { review: updatedArray }
    );
    return res.status(200).json(rating);
  }
};

const updateOverallCourseRating = async (req, res) => {
  const { title } = req.body;
  try {
    const course = await Course.findOne({ title });
  } catch (error) {}
};
const watchVideo = async (req, res) => {
  const { title, subTitle } = req.body;
  const course = await Course.findOne({ title: title });
  if (!course) {
    return res.status(404).json("No Such Course");
  }
  const subtitle = await Subtitle.findOne({
    courseId: course.id,
    title: subTitle,
  });
  if (!subtitle.video) {
    return res.status(404).json("No Videos Found For This Course");
  }
  return res.status(200).json(subtitle.video);
};

const getExerciseGrade = async (req, res) => {
  const { subTitle, exerciseTitle } = req.body;
  const subtitle = await Subtitle.findOne({
    title: subTitle,
  });
  const exercise = subtitle.exercises.find(
    (element) => element.title == exerciseTitle
  );
  if (!exercise || exercise == "") return res.status(404).json();
  console.log(exercise);
  res.status(200).json(exercise);
};

const addExercise = async (req, res) => {
  const { subTitle, title, grade, maxGrade } = req.body;
  const subtitle = await Subtitle.findOne({ title: subTitle });
  const exercises = subtitle.exercises;
  console.log(subtitle.exercises);
  exercises.push({ title, grade, maxGrade });

  const subtitleUpdated = await Subtitle.findOneAndUpdate(
    { title: subTitle },
    {
      exercises: exercises,
    }
  );
  res.status(200).json(subtitleUpdated);
};

module.exports = {
  createTrainee,
  updateCourseRating,
  watchVideo,
  getExerciseGrade,
  addExercise,
};
