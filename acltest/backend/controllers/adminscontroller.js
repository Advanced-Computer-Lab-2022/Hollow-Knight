const Admin = require('../models/Admins')
const Requests = require('../models/CourseRequests')
const User =require('../models/userModel') 
const Trainee = require('../models/Trainees')
const Reports = require('../models/Reports')
const Refunds = require('../models/RefundRequests')
const Courses = require('../models/Courses')
const jwt = require("jsonwebtoken");

const getTokenFromHeader = (req) => {
    const authorization = req.get("authorization");
    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
      return authorization.substring(7);
    }
    return null;
  };
  
  function getUserIdFromToken(token) {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    return decoded._id;
  }

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
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const cq = await Requests.find({});
    res.status(200).json(cq);
    console.log(cq)
    };

    const makerequest = async (req, res) => {
        const cq = await Requests.create({courseid: req.body.courseid, traineeid: req.body.traineeid , coursetitle : req.body.coursetitle, traineemail: req.body.traineemail});
        res.status(200).json(cq);
        };


const acceptrequest = async (req, res) => {
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const rq = await Requests.findOne({_id : req.query.requestId})
    console.log(rq)
    const trainid = rq.traineeid
    const courseid = rq.courseid
    const addcourse = await Trainee.findOneAndUpdate({_id: trainid}, {$push : {registeredcourses : courseid}})
    res.status(200).json(rq);
    console.log(rq)
    };

    const rejectrequest = async (req, res) => {
        var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
        const poop = await Requests.findOneAndDelete({_id: req.query.requestId})
        res.status(200).json("success")
        };


const viewreports = async (req, res) => {
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const cq = await Reports.find({});
     res.status(200).json(cq);
        };
        
const resolvereport = async (req, res) => {
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const resolve = "resolved"
    const poop = await Reports.findOneAndUpdate({_id: req.query.reportId}, {status : resolve})
    res.status(200).json("success")
     };

const pendreport = async (req, res) => {
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const pend = "pending"
    const poop = await Reports.findOneAndUpdate({_id: req.query.reportId}, {status : pend})
    res.status(200).json("success")
    };
    
const viewrefunds = async (req, res) => {
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const cq = await Refunds.find({});
    const mbape = await Courses.findOne({_id : cq[0].courseid})
    const prices = [mbape.price]
    for (var i = 1;i<cq.length;i++){
          var number = await Courses.findOne({_id: cq[i].courseid})
          prices.push(number.price)
        }
    for (var i = 0;i<cq.length;i++){
        cq[i].set('courseprice', prices[i], {strict: false});
          }
    res.status(200).json(cq);
    console.log(cq)
    };

const addfunds = async (req, res) => {
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const cq = await Refunds.findOne({_id : req.query.refundId});
    const courseinq = await Courses.findOne({_id : cq.courseid})
    const refunding = courseinq.price
    const refundadded = await Trainee.findOne({_id : cq.traineeid})
    const refundpart = refundadded.wallet
    const returnit = await Trainee.findOneAndUpdate({_id : cq.traineeid}, {wallet : (refundpart + refunding)})
    res.status(200).json("success!");

}

const denyfunds = async (req, res) => {
    var token =getTokenFromHeader(req);
    const userid = getUserIdFromToken(token)
    const gettype = await User.findOne({_id: userid})
    const type= "admin"
    console.log(gettype.type)
    if(gettype.type != type){
        return
    }
    const cq = await Refunds.findOneAndDelete({_id : req.query.refundId});
    res.status(200).json("success!");

}

const makerefund = async (req, res) => {
    const cq = await Refunds.create({courseid: req.body.courseid, traineeid: req.body.traineeid , coursetitle : req.body.coursetitle, traineemail: req.body.traineemail});
    res.status(200).json(cq);
    };
module.exports = {
    createAdmin,
    viewrequests,
    makerequest,
    acceptrequest,
    rejectrequest,
    viewreports,
    resolvereport,
    pendreport,
    viewrefunds,
    addfunds,
    denyfunds,
    makerefund
    }