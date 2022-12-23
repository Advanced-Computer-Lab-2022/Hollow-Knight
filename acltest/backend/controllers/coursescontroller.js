const { default: mongoose } = require("mongoose");
const Course = require("../models/Courses");

const findCourses = async (req, res) => {
  const courses = await Course.find({});
    
  res.status(200).json(courses);
};

const CourseDetails = async (req, res) => {
  //const titles = req.body
  //const key =titles._id
  const { id } = req.params;
  const courses = await Course.findById(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid course id" });
  }

  res.status(200).json(courses)


if (!courses) {
  return res.status(400).json({ error: "course does not exist" });
}
res.status(200).json(courses);
};




const selectdiscounts = async (req,res) => {
  console.log(req.body.discount)
  for (const courseid of req.body.checklist) {
    console.log(courseid)
    const shit = await Course.findOneAndUpdate({_id : courseid} , {discount : {percent : req.body.discount}})
  }
  res.status(200).json("success!")
}

const alldiscounts = async (req,res) => {
  console.log(req.body.discount)
  const shite = await Course.updateMany({}, {discount : {percent : req.body.discount}})
  res.status(200).json("success!")
}

module.exports = {
  findCourses,
  CourseDetails,
  selectdiscounts, alldiscounts
};
