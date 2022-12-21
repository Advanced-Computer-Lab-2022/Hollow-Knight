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
      { type: mongoose.Types.ObjectId, ref: "Courses", required: false },
    ],
    wallet :{
           type:Number,
           required:false,
           default:0

    }

  },

  { timestamps: true }
);

module.exports = mongoose.model("Trainee", traineeSchema);
