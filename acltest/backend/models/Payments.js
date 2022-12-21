const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    traineeid: {
      type: mongoose.Types.ObjectId,
      ref: "Trainees",
      required: false,
    },
    courseid: {
        type: mongoose.Types.ObjectId,
        ref: "Courses",
        required: false,
      },
      instructorid: {
        type: mongoose.Types.ObjectId,
        ref: "Instructors",
        required: false,
      },
      payment:{
        type : Number,
        required : false
      },
      date :{
        type :Date,
        required:false
      }
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payments", PaymentSchema);
