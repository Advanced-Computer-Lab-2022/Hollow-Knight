const Trainee= require('../models/Trainees')
const Instructor = require('../models/Instructors')
const mongoose = require('mongoose')

const updateCountry = async (req,res) =>{
    const instructor = await Instructor.findOneAndUpdate({name:req.body.name},{country:req.body.country})
    const trainee = await Trainee.findOneAndUpdate({name:req.body.name},{country:req.body.country})
    if(instructor!=null){
        return res.status(200).json(instructor)
    }
    if (trainee!=null){
        return res.status(200).json(trainee)
    }return res.status(404).json("Please enter a valid Username.")
    
}

module.exports ={updateCountry}