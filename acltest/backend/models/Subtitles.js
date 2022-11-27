const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subtitleSchema = new Schema(
  {
    userid: {
      type: mongoose.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
    exercises: [
      {
        title: { type: String, required: false },
        grade: { type: Number, required: false },
        maxGrade: { type: Number, required: false },
      },
    ],
    video: [
      {
        link: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestaps: true }
);

module.exports = mongoose.model("Subtitle", subtitleSchema);
