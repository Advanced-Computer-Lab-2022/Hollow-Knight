const Trainee = require("../models/Trainees");
const Instructor = require("../models/Instructors");
const mongoose = require("mongoose");

const updateCountry = async (req, res) => {
  const instructor = await Instructor.findOneAndUpdate(
    { name: req.body.name },
    { country: req.body.country, countryAbb: req.body.countryAbb }
  );
  const trainee = await Trainee.findOneAndUpdate(
    { name: req.body.name },
    { country: req.body.country, countryAbb: req.body.countryAbb }
  );
  if (instructor != null) {
    return res.status(200).json(instructor);
  }
  if (trainee != null) {
    return res.status(200).json(trainee);
  }
  return res.status(404).json("Not found");
};
const fetchUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }
  const instructor = await Instructor.findById(id);
  const trainee = await Trainee.findById(id);
  if (instructor != null) {
    return res.status(200).json(instructor);
  }
  if (trainee != null) {
    return res.status(200).json(trainee);
  }
  return res.status(404).json("Not found");
};

module.exports = { updateCountry, fetchUser };
