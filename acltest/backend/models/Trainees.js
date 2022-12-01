const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const traineeSchema = new Schema(
  {
    userid: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    //array of courses belongs to trainee
    courses: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Courses",
        required: false,
        default: [],
      },
    ],
  },
  { timestaps: true }
);

module.exports = mongoose.model("Trainee", traineeSchema);
