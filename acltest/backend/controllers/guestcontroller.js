const { default: mongoose } = require("mongoose");
const Course = require("../models/Courses");



const guestfindCourses = async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json(courses);
  };


  const guestsearch = async (req, res) => {
    const  search  = req.body.searchb;
  var instructor
    try{
        instructor =await Instructor.findOne({userid:userid}) 
    }catch(error){
          return res.status(200).json({error:"couldn't find user "})
    }
    var insid=instructor._id
  
    try {
        
        const course = await Course.find({ title: search, author: insid });
        const course1 =await Course.find({subject: search, author: insid})
        
        const result= [...course,...course1]
       
        return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: "Course not found" });
    }
  };

  module.exports = {
   guestfindCourses,guestsearch
  };
