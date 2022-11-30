const Trainee = require("../models/Trainees");
const Instructor = require("../models/Instructors");
const mongoose = require("mongoose");
const User = require("../models/Users")
const updateCountry = async (req, res) => {
  const instructor = await User.findOneAndUpdate(
    { username: req.body.name },
    { country: req.body.country, countryAbb: req.body.countryAbb }
  );
  const trainee = await User.findOneAndUpdate(
    { username: req.body.name },
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
  const user = await User.findById(id);
  console.log(user)
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(404).json("Not found");
};

module.exports = { updateCountry, fetchUser };
