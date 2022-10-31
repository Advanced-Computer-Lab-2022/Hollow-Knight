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

module.exports = {
    createInstructor,searchCourse
    

}
