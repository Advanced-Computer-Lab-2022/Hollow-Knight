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
        rating:{type:Number,require:false},
        reviews: { type: String, required: false },
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
  { timestaps: true }
);

module.exports = mongoose.model("Instructors", instructorSchema);
