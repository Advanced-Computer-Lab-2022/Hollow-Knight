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

const findCourses = async (req,res) => {
    const courses = await Course.find({})
    res.status(200).json(courses)
}
module.exports = {
    createCourse,
    findCourses,
}