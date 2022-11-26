const Trainee = require("../models/Trainees");
const Course = require("../models/Courses");
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
  const { title, rating } = req.body;

  try {
    const courseRatingUpdate = await Course.findOneAndUpdate(
      { title },
      { rating }
    );
    return courseRatingUpdate;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "Rating Updated" });
};

module.exports = {
  createTrainee,
  updateCourseRating,
};
