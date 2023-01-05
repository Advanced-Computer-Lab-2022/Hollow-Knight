const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    numberOfTrainees: {
      type: Number,
      required: false,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    subject: {
      type: String,
      required: false,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "Instructors",
      required: false,
    },
    review: [
      {
        rating: { type: Number, required: false },
        reviews: { type: String, required: false },
        traineeId: { type: mongoose.Types.ObjectId, required: false },
      },
    ],

    summary: {
      type: String,
      required: true,
    },
    total_hours: {
      type: Number,
      required: false,
    },
    overallRating: {
      type: Number,
      required: false,
      default: 0,
    },

    discount: {
      percent: { type: Number, required: false, default: 0 },
      duration: { type: Date, required: false },
    },
    maxProgress: {
      type: Number,
      required: false,
      default: 0,
    },
    traineeProgression: {
      type: Number,
      required: false,
      default: 0,
    },
    video: {
      type: String,
      required: false,

    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
