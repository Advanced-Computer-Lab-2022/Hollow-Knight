const Trainee= require('../models/Trainees')
const User= require('../models/Users')
const Courses= require('../models/Courses')
const Instructors = require('../models/Instructors')
const Subtitles= require('../models/Subtitles')


const ViewCorrectAnswers = async (req, res) => {
    
    try {
      const subtitle = await Subtitles.findOne({ _id: req.body.subid });
      for (const obj of subtitle.exercises) {
        if (obj._id == req.body.id) {
          return res.status(200).json(obj.problems);
        }
      }
    } catch (error) {
      res.status(404).json(error);
    }
  };


const createTrainee = async (req, res) => {
    const {username, password,country} = req.body
    const type ="Trainee"
    try{
        
        const trainee = await User.create({username,password,country,type})
        console.log(trainee._id)
        const userid=trainee._id
        const user =await Trainee.create({userid})
    
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'user added'})
    }


    const FindCourses = async (req, res) => {
        const userid = req.query.userId;
        let allcourse=[]
        //console.log(userid)

        try{
            
            const courses = await Trainee.findOne({userid:userid})
                 
            console.log(courses.registeredcourses)
           
            while(courses.registeredcourses.length>0){
                console.log(courses.registeredcourses)
                let currentcourse = courses.registeredcourses.pop()
             console.log(currentcourse)
              let course = await Courses.findById(currentcourse)
              allcourse.push(course)

            }

            //console.log(allcourse)
           
        }
        catch (error) {
            return res.status(400).json({error: error.message})
        }
       
    
        return res.status(200).json(allcourse)
        }
    
      const GetCourseSubtitles= async (req,res)=>{
        const courseId = req.query.courseid;
        //console.log(courseId)
        try{
      
            const subtitles = await Subtitles.find({courseid:courseId}) 
            return res.status(200).json(subtitles)

        }catch(error){

            return res.status(400).json({error: error.message})

        }


      }



module.exports = {
    createTrainee,FindCourses,GetCourseSubtitles,ViewCorrectAnswers
    }