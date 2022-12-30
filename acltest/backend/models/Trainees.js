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
        emailSent: { type: Boolean, default: false },
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
    wallet: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Trainee", traineeSchema);
