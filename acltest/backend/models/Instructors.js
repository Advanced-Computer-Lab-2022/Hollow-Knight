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
        review: { type: Number, required: false },
        traineeid: { type: mongoose.Types.ObjectId, 
          ref:"Users", 
        required: true },
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
  { timestamps: true }
);

module.exports = mongoose.model("Instructors", instructorSchema);
