const { default: mongoose } = require('mongoose')
const Course = require('../models/Courses')


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
const getCourse = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No sch course'})
    }
    const course = await Course.findById(id)
    return res.status(200).json(course)
    if(!course){
       return res.status(404).json({error:'No sch course'})
    }
}

const findCourses = async (req,res) => {
    const courses = await Course.find({})
    res.status(200).json(courses)
}








module.exports = {
    CourseDetails,
    findCourses,
    getCourse
}