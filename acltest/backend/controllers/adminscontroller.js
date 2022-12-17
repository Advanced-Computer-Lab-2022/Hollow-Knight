const Admin = require('../models/Admins')
const Requests = require('../models/CourseRequests')
const User =require('../models/userModel') 
const Trainee = require('../models/Trainees')

const createAdmin = async (req, res) => {
    const {email, password,country,countryAbb} = req.body
    const type= "Admin"
    //const w = await User.findOne({username:name})
 /*   if(w){
        return
    }*/
    try{
    const admin = await User.create({email,password,country,type,countryAbb})
    console.log(admin._id)
    const userid=admin._id
    const user =await Admin.create({userid})
     res.status(200).json(user)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    
   return ;
  
    }

const viewrequests = async (req, res) => {
    const cq = await Requests.find({});
    res.status(200).json(cq);
    console.log(cq)
    };

    const makerequest = async (req, res) => {
        const cq = await Requests.create({courseid: req.body.courseid, traineeid: req.body.traineeid , coursetitle : req.body.coursetitle, traineemail: req.body.traineemail});
        res.status(200).json(cq);
        };


const acceptrequest = async (req, res) => {
    const rq = await Requests.findOne({_id : req.query.requestId})
    console.log(rq)
    const trainid = rq.traineeid
    const courseid = rq.courseid
    const addcourse = await Trainee.findOneAndUpdate({_id: trainid}, {$push : {registeredcourses : courseid}})
    res.status(200).json(rq);
    console.log(rq)
    };

    const rejectrequest = async (req, res) => {
        const poop = await Requests.findOneAndDelete({_id: req.query.requestId})
        };

      

module.exports = {
    createAdmin,
    viewrequests,
    makerequest,
    acceptrequest,
    rejectrequest
    }