const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
    userid: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    rating: [
      {
        rating: { type: Number, required: false },
        traineeId: { type: mongoose.Types.ObjectId, required: false },
      },
    ],
    overallRating: {
      type: Number,
      required: false,
    },
    biography: {
      type: String,
      required: false,
    },
  },
  { timestaps: true }
);

module.exports = mongoose.model("Instructors", instructorSchema);
