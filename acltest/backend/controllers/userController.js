const Trainee = require('../models/Trainees')
const Instructor = require('../models/Instructors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const createtoken = async (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
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

        const url = `http://localhost:5000/api/users/changepassword/`+token
        res.status(200).json({ url })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
//change password without old password
const changePassword1 =async  (req,res)=>{
    const {password} = req.body
    const {token} = req.params
    console.log(token)
    try {
        const { _id } = jwt.verify(token, process.env.SECRET)
       console.log(_id)
        const user = await User.findOne ({ _id })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        user.password = hashedPassword
        await user.save()
        res.status(200).json({ message: "Password changed successfully" })
    } catch (error) {

        res.status(400).json({ error: error.message })
    }
   
}


// change password 
const changePassword =async  (req,res)=>{
    const {email,password,newPassword}=req.body
    try {
        if (!validator.isStrongPassword(newPassword)) {
            throw Error('Password not strong enough')
          }
        const user = await User.login(email, password)
        const token = await createtoken(user._id)
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newPassword, salt)
        const user1=await User.findOneAndUpdate({
            email:email
        },{
            password:hash
        })
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


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



module.exports = { updateCountry, loginUser, signupUser,forgotPassword,changePassword,changePassword1 }