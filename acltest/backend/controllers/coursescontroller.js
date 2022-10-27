const { default: mongoose } = require('mongoose')
const Course = require('../models/Courses')


const createCourse = async (req, res) => {
    const {title, price, subject, author, rating,hours} = req.body

    try{
        
        const course = await Course.create({title, price, subject, author , rating,hours})
    }
    catch (error) {
            res.status(400).json({error: error.message})
    }

    res.json({mssg: 'post new course'})
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
    createCourse,
    findCourses,
    getCourse
}