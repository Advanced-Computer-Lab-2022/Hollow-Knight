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
    name:{
      type:String,
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
    published:{
      type: String,
      default:false
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
      start_date: { type: Date, required: false },
      end_date:{type:Date ,required:false}
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
    registered: {
      type: Boolean,
      default: false,},
    video: {
      type: String,
      required: false,
    },
    exam : {
      title: { type: String, required: false },
      grade: { type: Number, required: false },
      maxGrade: { type: Number, required: false },
      problems: [
        {
          questions: { type: String, required: false },
          answers: [String],
          solution: { type: String, required: false },
        },
      ],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
