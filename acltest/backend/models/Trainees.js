const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const traineeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: false,
    },
    countryAbb: {
      type: String,
      required: false,
    },
    courseId: {
      type: mongoose.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
  },
  { timestaps: true }
);

module.exports = mongoose.model("Trainee", traineeSchema);
