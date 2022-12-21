const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
    userid: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    review: [
      {
        rating: { type: Number, require: false },
        reviews: { type: String, required: false },
        traineeid: {
          type: mongoose.Types.ObjectId,
          ref: "Users",
          required: true,
        },
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
    contract: {
      Status: { type: String, required: false, default: "Pending" },
      percent: { type: Number, required: false, default: 70 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Instructors", instructorSchema);
