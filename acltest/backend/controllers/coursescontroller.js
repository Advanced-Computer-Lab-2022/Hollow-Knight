const { default: mongoose } = require("mongoose");
const Course = require("../models/Courses");
const jwt = require("jsonwebtoken");
//get token from header
const getTokenFromHeader = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

function getUserIdFromToken(token) {
  const decoded = jwt.verify(token, process.env.SECRET);
  console.log(decoded);
  return decoded._id;
}

const findCourses = async (req, res) => {
  const token = getTokenFromHeader(req);
  console.log(token); 
  const userid=getUserIdFromToken(token);
  console.log(userid);

  const courses = await Course.find({});
  res.status(200).json(courses);
};

const CourseDetails = async (req,res) => {
  //const titles = req.body
  //const key =titles._id
  const{id}=req.params

 if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error :'invalid course id'})
     }

   const courses = await Course.findById(id)



  if(!courses){
      return res.status(400).json({error :'course does not exist'})
  }

  res.status(200).json(courses)
}
module.exports = {
  findCourses,CourseDetails
};
