const Trainee = require('../models/Trainees')
const Instructor = require('../models/Instructors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

const createtoken = async (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}



const updateCountry = async (req, res) => {
    const instructor = await Instructor.findOneAndUpdate({ name: req.body.name }, { country: req.body.country })
    const trainee = await Trainee.findOneAndUpdate({ name: req.body.name }, { country: req.body.country })
    if (instructor != null) {
        return res.status(200).json(instructor)
    }
    if (trainee != null) {
        return res.status(200).json(trainee)
    } return res.status(404).json("Please enter a valid Username.")

}
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = await createtoken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// change password 
const changePassword =async  (req,res)=>{
    const {email,password,newPassword}=req.body
    try {
        const user = await User.login(email, password)
        const token = await createtoken(user._id)
        const user1=await User.findOneAndUpdate({
            email:email
        },{
            password:newPassword
        })
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


}


// receive an email to change a forgotten password
const forgotPassword = async (req, res) => {
    const { email } = req.body
    try {
        const user = await User.findOne ({ email })
        if (!user) {
            return res.status(404).json({ error: "User not found" })    
        }
        const token = await createtoken(user._id)
        const url = `http://localhost:3000/resetPassword/${token}`
        res.status(200).json({ url })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}








const signupUser = async (req, res) => {
    const { email, password,type } = req.body

    try {
        const user = await User.signup(email, password,type)
        const token = await createtoken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = { updateCountry, loginUser, signupUser,forgotPassword,changePassword }