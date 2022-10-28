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









    
//get instructor by id
const getInstructorById = async (req, res) => {
    const {id} = req.params
    try{
        const instructor = await Instructor.findById(id)
        if (instructor) {
            return res.json(instructor)
        }
        res.status(404).json({mssg: `instructor with id ${id} not found`})
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}

//get instructor by name
const getInstructorByName = async (req, res) => {
    const {name} = req.params
    try{
        const instructor = await Instructor.find({name})
        if (instructor) {
            return res.json(instructor)
        }

        res.status(404).json({mssg: `instructor with name ${name} not found`})

    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}

// filter the courses given by him/her based on price
const filterCourseInstructor = async (req, res) => {
    const {id} = req.params
    const {price} = req.body
    try{
        const instructor = await Instructor.findById(id)
        if (instructor) {
            const course = await Course.find({instructor: id, price: {$lte: price}})
            return res.json(course)
        }
        res.status(404).json({mssg: `instructor with id ${id} not found`})
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}







// search for a course given by him/her based on course title or subject or instructor or price
const searchCourse = async (req, res) => {
    const {title,instructor} = req.body
    const {subject,price} = req.body

    try{
        if (title){
            const course = await Course.find({title:title,author:instructor})
            return res.status(200).json(course)
        }else
         if (subject){ 
            const course = await Course.find({subject:subject,author:instructor})
            return res.status(200).json(course)
        }
     
        else
        if(price){
            const course = await Course.find({price:price,author:instructor})
            return res.status(200).json(course)
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
        return res.status(200).json(course)
        throw new Error("Course not exist")

    }   
    catch (error) {
       return res.status(500).json({error: error.message})
    }
}



module.exports = {
    createInstructor,searchCourse,
    viewCourseInstructor
    

}
