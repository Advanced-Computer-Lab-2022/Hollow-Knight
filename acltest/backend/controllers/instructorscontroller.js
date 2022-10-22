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
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Instructor'})
    }

    const instructor = await Instructor.findOneAndUpdate({_id:id},{
        ...req.body
 

    })
    if(!instructor){
        return res.status(400).json({error:'no instructor'})
    }
    res.status(200).json(instructor)
}

module.exports = {
    createInstructor,updateInstructorCountry
    }