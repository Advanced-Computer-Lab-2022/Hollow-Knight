const Instructor = require('../models/Instructors')
const Course = require('../models/Courses')
const User = require('../models/Users')
const Subtitles = require('../models/Subtitles')
const createInstructor = async (req, res) => {
    const {username, password,country} = req.body
    const type = "Instructor"

    try{
        const instructor = await User.create({username,password,country,type})
        console.log(instructor._id)
        const userid=instructor._id
        await Instructor.create({userid: userid})
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
    const {title,price,subject,summary,total_hours} = req.body
   
       try{
          const course = await Course.create({title,price,subject,author,summary,total_hours})
          res.status(200).json(course)
       }
       catch(error){
             res.status(400).json({error :error.message})
       }
      
      
}


const ViewReviews =async (req,res) =>{
    const name = req.query.userId;
   try
    {
        const course = await Course.find({author:name})
        console.log(course)
        return res.status(200).json(course)
    }catch(error){
        res.status(400).json({error :error.message})
  }
     
}


const updatemailbiogrpahy = async (req, res) => {
  //  const {username, password, biography,mail} = req.body
    const instruct = "Instructor"
    try{
   const instructor = await User.findOne({username: req.body.username, password: req.body.password, type: instruct})
   if(!instructor){
    res.status(404).json("not found")
    return
   }
   
    if(req.body.mail) {
    const updatemail = await User.findOneAndUpdate({username: req.body.username, password: req.body.password, type: instruct}, {email:req.body.mail})
    }
    var ObjectId = require('mongoose').Types.ObjectId;
    var userid = instructor._id
    if(req.body.biography){
        const updatebiography = await Instructor.findOneAndUpdate({userid: userid}, {biography: req.body.biography})
    }
    res.status(200).json("success")
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    
   return ;
  
    }

    const rateinstructor = async (req, res) => {
        //  const {username, password, biography,mail} = req.body
          const instruct = "Instructor"
          const trainer = "Trainee"
          try{
         const trainee = await User.findOne({username : req.body.traineeusername, type : trainer})
        if(!trainee){
            res.status(404).json("trainee not found")
        }
         const instructor = await User.findOne({username: req.body.instructorusername})
         if(!instructor){
          res.status(404).json("not found")
          return
         }
       //  console.log(instructor)
          const traineeid = trainee._id
          console.log(traineeid)
          const userid = instructor._id
          const findinst= await Instructor.findOne({userid: userid})
          console.log(findinst.rating)
        
          var check = false
          for (const obj of findinst.rating) {
            if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
              check = true
              break;
            }
          }
          if(req.body.review){
        if(check == false){
        const updaterating = await Instructor.findOneAndUpdate({userid: userid}, {$push : {rating: { review : req.body.review, traineeid : traineeid} }})
         res.status(200).json("added")
         return
        }
        else{
            console.log("in the else")
            const newlist = findinst.rating
            console.log("newlist: " + newlist)
            for (const obj of newlist) {
                if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
                    obj.review = req.body.review
        }
    }
        const updaterating = await Instructor.findOneAndUpdate({userid: userid}, {rating: newlist})
        res.status(200).json("updated")
        var sum = 0
        for (const obj of newlist) {
            if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
                sum += obj.review
          }
          var newaverage = sum/newlist.length
          const updatetotal = await Instructor.findOneAndUpdate({userid: userid}, {overallRating : newaverage})
          console.log("updatetotal:" + updatetotal)
        }

    }
          }
        }
          catch (error) {
              res.status(400).json({error: error.message})
          }
          
         return ;
        
          }


const viewmycourses = async (req, res) => {
//  const {username, password, biography,mail} = req.body
     const instruct = "Instructor"
     const mostak = req.query.userId
    try{
    console.log(req.query.userId)
    const courses = await Course.find({author: mostak})
    res.status(200).json(courses)
    console.log(courses)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }

const viewmysubtitles = async (req, res) => {
//  const {username, password, biography,mail} = req.body
     const instruct = "Instructor"
     const mostak = req.query.courseId
    try{
    const subtitles = await Subtitles.find({courseid: mostak})
    res.status(200).json(subtitles)
    console.log(subtitles)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }  

const applydiscount = async (req, res) => {
//  const {username, password, biography,mail} = req.body
     const instruct = "Instructor"
     const mostak = req.query.courseId
    try{
    const courses = await Course.findOne({_id: mostak})
    var money = courses.price
    console.log(money)
    var newmoney = money - req.body.discount
    const updating = await Course.findOneAndUpdate({_id: mostak}, {price: newmoney})
    res.status(200).json("success!")
    console.log(courses)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }

 
const CreateSchedule =async (req,res) =>{
    const instruct = "Instructor"
     const mostak = req.query.courseId
    try{
    const courses = await Course.findOne({_id: mostak})
    const newsched = await Subtitles.create({Title:req.body.name, TotalHours: req.body.hour, courseid: mostak})
    res.status(200).json("success!")
    console.log(courses)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
                  
            }
            


const uploadvideo = async (req, res) => {
     const link = req.body.link
     const desc = req.body.desc
    try{
    const myArray = link.split("=");
    console.log(myArray)
    console.log("hi")
    const updating = await Subtitles.findOneAndUpdate({_id:req.query.subtitleId}, {$push : {video: { link : myArray[1], description : req.body.description} }})
    res.status(200).json("success!")
    console.log(updating)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }


module.exports = {
    createInstructor,updateInstructorCountry,searchCourse,CreateCourse,searchCourse2,ViewReviews,updatemailbiogrpahy,rateinstructor,viewmycourses,applydiscount,CreateSchedule,viewmysubtitles,uploadvideo
    }
