const Instructor = require("../models/Instructors");
const Course = require("../models/Courses");
const User = require("../models/Users");
const Subtitle = require("../models/Subtitles");
const createInstructor = async (req, res) => {
  const { username, password, country } = req.body;
  const type = "Instructor";

  try {
    const instructor = await User.create({ username, password, country, type });
    console.log(instructor._id);
    const userid = instructor._id;
    const user = await Instructor.create({ userid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "user added" });
};
const updateInstructorCountry = async (req, res) => {
  const instructor = await Instructor.findOneAndUpdate(
    { name: req.body.name },
    {
      country: req.body.country,
    }
  );
  if (!instructor) {
    return;
  }
  res.status(200).json(instructor);
};

// search for a course given by him/her based on course title or subject or instructor or price
const searchCourse = async (req, res) => {
  const { name } = req.body;
  const { title } = req.body;
  const { subject, price } = req.body;

  try {
    if (title) {
      const course = await Course.find({ title: title, author: name });
      return res.status(200).json(course);
    }
    if (subject) {
      const course = await Course.find({ subject: subject, author: name });
      return res.status(200).json(course);
    }

    if (price) {
      const course = await Course.find({ price: price, author: name });
      return res.status(200).json(course);
    }
    if (name) {
      const course = await Course.find({ author: name });
      return res.status(200).json(course);
    }

    throw new Error("Course not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const searchCourse2 = async (req, res) => {
  const { name } = req.body;
  const { title } = req.body;
  const { subject, price } = req.body;

  try {
    if (title) {
      const course = await Course.find({ title: title });
      return res.status(200).json(course);
    }
    if (subject) {
      const course = await Course.find({ subject: subject });
      return res.status(200).json(course);
    }

    if (price) {
      const course = await Course.find({ price: price });
      return res.status(200).json(course);
    }
    if (name) {
      const course = await Course.find({ author: name });
      return res.status(200).json(course);
    }

    throw new Error("Course not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const CreateCourse = async (req, res) => {
  const author = req.query.userId;
  const {
    title,
    price,
    subject,
    subtitles,
    subtitles_hours,
    summary,
    excercises,
    total_hours,
  } = req.body;

  try {
    const course = await Course.create({
      title,
      price,
      subject,
      author,
      subtitles,
      subtitles_hours,
      summary,
      excercises,
      total_hours,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const ViewReviews = async (req, res) => {
  const name = req.query.userId;
  try {
    const course = await Course.find({ author: name });
    console.log(course);
    return res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addExercise = async (req, res) => {
  const { title, maxGrade, problems } = req.body;
  const subtitle = await Subtitle.findOne({ id: req.body.id });
  const exercisesArray = subtitle.exercises;
  console.log(subtitle);
  exercisesArray.push({ title, maxGrade, problems });
  const updatedSubtitle = await Subtitle.findOneAndUpdate(
    { id: req.body.id },
    { exercises: exercisesArray }
  );
  return res.status(200).json(updatedSubtitle);
};

module.exports = {
  createInstructor,
  updateInstructorCountry,
  searchCourse,
  CreateCourse,
  searchCourse2,
  ViewReviews,
  addExercise,
};
