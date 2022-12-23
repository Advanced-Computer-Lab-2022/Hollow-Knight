const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const traineeSchema = new Schema(
  {
    userid: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    registeredcourses: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Courses",
        required: false,
      },
    ],
    courseProgression: [
      {
        courseId: {
          type: mongoose.Types.ObjectId,
          ref: "Courses",
          required: false,
        },
        progression: { type: Number, default: 0 },
        videos: [
          {
            videoId: {
              type: mongoose.Types.ObjectId,
              ref: "Users",
              required: true,
            },
            finished: { type: Boolean, default: false },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trainee", traineeSchema);
