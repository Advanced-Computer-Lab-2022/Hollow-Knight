const Instructor = require('../models/Instructors')
const mongoose = require('mongoose')
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
const updateInstructorCountry = async (req,res) =>{


    const instructor = await Instructor.findOneAndUpdate({name:req.body.name},{
        country:req.body.country
 

    })
    if(!instructor){
        return;
    }
    res.status(200).json(instructor)
}

module.exports = {
    createInstructor,updateInstructorCountry
    }