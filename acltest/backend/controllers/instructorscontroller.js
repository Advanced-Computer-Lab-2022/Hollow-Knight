const Instructor = require('../models/Instructors')
const Course = require('../models/Courses')
const createInstructor = async (req, res) => {
    const {name, password} = req.body

    try{
        
        const instructor = await Instructor.create({name,password})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'user added'})
    }









    
    // filter the courses given by Instructor based on a subject or price
const filterCourse = async (req, res) => {
    const {subject, price} = req.body
    const instructor =req.body
    try{
        const course = await Course.find({subject, price, instructor})
        res.status(200).json(course)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    }






// search for a course given by him/her based on course title or subject or instructor
const searchCourse = async (req, res) => {
    const {title,instructor} = req.body
    const {subject} = req.body

    try{
        if (title){
            const course = await Course.find({title:title,author:instructor})
            return res.status(200).json(course)
        }else
         if (subject){ 
            const course = await Course.find({subject:subject,author:instructor})
            return res.status(200).json(course)
        }
     
        else{
           return res.status(400).json({error: error.message})
        }

        throw new Error("Course not found")
    }
    catch (error) {
       return res.status(500).json({error: error.message})
    }
}
// view all the titles of the courses given by him/her
const viewCourseInstructor = async (req, res) => {
    const {instructor} = req.body
    try{
        const course = await Course.find({author:instructor})
        res.status(200).json(course)
        throw new Error("Course not exist")

    }   
    catch (error) {
        res.status(500).json({error: error.message})
    }
}



module.exports = {
    createInstructor,searchCourse,
    viewCourseInstructor,filterCourse
    ,

}
