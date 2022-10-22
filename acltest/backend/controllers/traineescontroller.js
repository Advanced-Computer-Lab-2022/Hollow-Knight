const Trainee= require('../models/Trainees')

const createTrainee = async (req, res) => {
    const {name, password} = req.body

    try{
        
        const trainee = await Trainee.create({name,password})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'user added'})
    }

module.exports = {
    createTrainee,
    }