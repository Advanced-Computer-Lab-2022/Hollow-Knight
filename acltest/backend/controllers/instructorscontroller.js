const Instructor = require('../models/Instructors')

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

module.exports = {
    createInstructor,
    }