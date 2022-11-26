const Trainee= require('../models/Trainees')
const User= require('../models/Users')


const createTrainee = async (req, res) => {
    const {username, password,country} = req.body
    const type ="Trainee"
    try{
        
        const trainee = await User.create({username,password,country,type})
        console.log(trainee._id)
        const userid=trainee._id
        const user =await Trainee.create({userid})
    
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'user added'})
    }

module.exports = {
    createTrainee,
    }