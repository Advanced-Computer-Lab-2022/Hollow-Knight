const Instructor = require('../models/Instructors')
const Course = require('../models/Courses')
const User = require('../models/Users')
const Subtitle = require("../models/Subtitles");
const { default: mongoose } = require('mongoose')




const GetCourseById = async (req,res) => {
    const CourseId = req.query.courseId;
    try{
    const course = await Course.findById(CourseId)
            return res.status(200).json(course)
    }
    catch(error)
    {
       return res.status(400).json({error: error.message})
    }

}

const UpdateContract = async (req,res) => {
    const CourseId = req.query.courseId;
    const Status=req.body.Status
    const percent=req.body.percent
    console.log(req.body)
    try{
    const course = await Course.findByIdAndUpdate(CourseId,{contract:{Status:Status,percent:percent}})
    //{Status:Status}
            return res.status(200).json(course)
    }
    catch(error)
    {
       return res.status(400).json({error: error.message})
    }

}


const createInstructor = async (req, res) => {
    const {username, password,country} = req.body
    const type = "Instructor"

    try{
        const instructor = await User.create({username,password,country,type})
        console.log(instructor._id)
        const userid=instructor._id
        const user =await Instructor.create({userid})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'user added'})
    }
const updateInstructorCountry = async (req,res) =>{


    const instructor = await Instructor.findOneAndUpdate({name:req.body.name},{
        country:req.body.country
 

    })
    if(!instructor){
        return;
    }
    res.status(200).json(instructor)
}



// search for a course given by him/her based on course title or subject or instructor or price
const searchCourse = async (req, res) => {
    const {name}=req.body;
    const {title} = req.body
    const {subject,price} = req.body

    

   
    try{
        if (title){
            const course = await Course.find({title:title,author:name})
            return res.status(200).json(course)
        }
         if (subject){ 
            const course = await Course.find({subject:subject,author:name})
            return res.status(200).json(course)
        }
     
        
        if(price){
            const course = await Course.find({price:price,author:name })
            return res.status(200).json(course)
        }
        if(name){
            const course = await Course.find({author:name})
            return res.status(200).json(course)
        }


        throw new Error("Course not found")
    }
    catch (error) {
       return res.status(500).json({error: error.message})
    }



}

const searchCourse2 = async (req, res) => {
    const {name}=req.body;
    const {title} = req.body
    const {subject,price} = req.body



   
    try{
        if (title){
            const course = await Course.find({title:title})
            return res.status(200).json(course)
        }
         if (subject){ 
            const course = await Course.find({subject:subject})
            return res.status(200).json(course)
        }
     
        
        if(price){
            const course = await Course.find({price:price })
            return res.status(200).json(course)
        }
        if(name){
            const course = await Course.find({author:name})
            return res.status(200).json(course)
        }


        throw new Error("Course not found")
    }
    catch (error) {
       return res.status(500).json({error: error.message})
    }



}



const CreateCourse =async (req,res) =>{
    const author = req.query.userId;
    const {title,price,subject,subtitles,subtitles_hours,summary,excercises,total_hours} = req.body
   
       try{
          const course = await Course.create({title,price,subject,author,subtitles,subtitles_hours,summary,excercises,total_hours})
          res.status(200).json(course)
       }
       catch(error){
        res.status(400).json({error :error.message})
       }
      
      
}
const DeleteCourse=async(req,res)=>{
const{id}=req.params
const userId = req.query.userId;
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Course Doesn't Exist"})
}
const course =await Course.findOneAndDelete({_id:id,author:userId})
if(!course){
    return res.status(400).json({error:"You Don't have such a Course"})
}
   res.status(200).json(course)
}

const UpdateCourse=async(req,res)=>{
    const{id}=req.params
    const userId = req.query.userId;
    const {title,price,subject,subtitles,subtitles_hours,summary,excercises,total_hours}=req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Course Doesn't Exist"})
    }

    if(req.body.title){
    const course =await Course.findOneAndUpdate({_id:id,author:userId},{title:title})
    }

    if(req.body.price){
        const course =await Course.findOneAndUpdate({_id:id,author:userId},{price:price})
    }

    if(req.body.subject){
        const course =await Course.findOneAndUpdate({_id:id,author:userId},{subject:subject})
    }  
     
    if(req.body.subtitles_hours){
        const course =await Course.findOneAndUpdate({_id:id,author:userId},{subtitles_hours:subtitles_hours})
    } 
    
    if(req.body.subtitles){
        const course =await Course.findOneAndUpdate({_id:id,author:userId},{subtitles:subtitles})
    } 

    if(req.body.summary){
        const course =await Course.findOneAndUpdate({_id:id,author:userId},{summary:summary})
    } 
    if(req.body.excercises){
        const course =await Course.findOneAndUpdate({_id:id,author:excercises},{excercises:excercises})
    } 
    if(req.body.total_hours){
        const course =await Course.findOneAndUpdate({_id:id,author:userId},{total_hours:total_hours})
    } 
/*
    if(!course){
        return res.status(400).json({error:"You Don't have such a Course"})
    } */
       res.status(200).json(req.body)
    
   
}

const ViewReviews =async (req,res) =>{
    const name = req.query.Id;
    const {title}=req.body
    console.log(title,name)
   try
    {
        const course = await Course.find({author:name,title:title})
        return res.status(200).json(course)
    }catch(error){
       return res.status(400).json({error :error.message})
  }
     
}
const ViewMyReviews =async (req,res) =>{
    const name = req.query.userId;
    console.log(name)
   try
    {
        const course = await Instructor.find({userid:name})
        return res.status(200).json(course)
    }catch(error){
       return res.status(400).json({error :error.message})
  }
     
}
const addExercise = async (req, res) => {
    const { title, maxGrade, problems } = req.body;
    const subtitle = await Subtitle.findOne({ id: req.body.id });
    const exercisesArray = subtitle.exercises;
    console.log(subtitle);
    exercisesArray.push({ title, maxGrade, problems });
    const updatedSubtitle = await Subtitle.findOneAndUpdate(
      { id: req.body.id },
      { exercises: exercisesArray }
    );
    return res.status(200).json(updatedSubtitle);
  };



module.exports = {
    createInstructor,updateInstructorCountry,searchCourse,CreateCourse,
    searchCourse2,ViewReviews,ViewMyReviews,DeleteCourse,UpdateCourse,GetCourseById,UpdateContract,addExercise
    }
