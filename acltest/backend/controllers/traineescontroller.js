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
  } else {
    for (const obj of updatedArray) {
      if (obj.traineeId == id) {
        obj.rating = rating;
        break;
      }
    }
  }

  var overallRating = 0;
  var counter = 0;
  for (const obj of updatedArray) {
    overallRating += obj.rating;
    counter++;
  }
  overallRating = Math.round((overallRating / counter) * 10) / 10;

  const updated = await Course.findOneAndUpdate(
    { title },
    { review: updatedArray, overallRating: overallRating }
  );
  console.log(overallRating);
  console.log(updated.overallRating);
  return res.status(200).json(updated);
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
const getTraineeCourses = async (req, res) => {
  try {
    const trainee = await Trainee.findOne({ id: req.body.id });
    const traineeCourses = trainee.courses;
    return res.status(200).json(traineeCourses);
  } catch (error) {
    return res.status(404).json(error);
  }
};
const addCourseToTrainee = async (req, res) => {
  try {
    const trainee = await Trainee.findOne({ id: req.body.traineeId });
    console.log(trainee);
    trainee.courses.push(req.body.courseId);
    const updatedTrainee = await Trainee.findOneAndUpdate(
      { id: req.body.traineeId },
      { courses: trainee.courses }
    );
    return res.status(200).json(updatedTrainee);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  createTrainee,
  updateCourseRating,
  watchVideo,
  getExerciseGrade,
  addExercise,
  getTraineeCourses,
  addCourseToTrainee,
};
