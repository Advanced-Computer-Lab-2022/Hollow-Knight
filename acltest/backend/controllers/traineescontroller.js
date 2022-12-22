const Trainee = require("../models/Trainees");
const User = require("../models/userModel");
const Courses = require("../models/Courses");
const Course = require("../models/Courses");
const Payments = require("../models/Payments")
const Subtitle = require("../models/Subtitles");
const Subtitles = require("../models/Subtitles");
const CourseRequests = require("../models/CourseRequests")
const RefundRequests = require("../models/RefundRequests")
const Reports= require("../models/Reports")
const ViewCorrectAnswers = async (req, res) => {
  try {
    const subtitle = await Subtitle.findOne({ _id: req.body.subid });
    for (const obj of subtitle.exercises) {
      if (obj._id == req.body.id) {
        return res.status(200).json(obj.problems);
      }
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const createTrainee = async (req, res) => {
  const { email, password, country, countryAbb } = req.body;
  console.log(req.body);
  const type = "Trainee";

  try {
    console.log("here");
    const trainee = await User.create({
      email,
      password,
      country,
      type,
      countryAbb,
    });
    console.log(trainee._id);
    const userid = trainee._id;
    const user = await Trainee.create({ userid: userid });
    res.json({ mssg: "user added" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  //res.json({ mssg: "user added" });
};

const updateCourseRating = async (req, res) => {
  const { courseId, rating, id, review } = req.body;
  const course = await Courses.findOne({ id: courseId });
  const updatedArray = course.review;
  console.log(course.review);
  const searchedRating = updatedArray.find(
    (element) => element.traineeId == id
  );
  if (searchedRating == null) {
    updatedArray.push({ rating: rating, traineeId: id, reviews: review });
  } else {
    for (const obj of updatedArray) {
      if (obj.traineeId == id) {
        obj.rating = rating;
        obj.reviews = review;
        break;
      }
    }
  }

  var overallRating = 0;
  var counter = 0;
  for (const obj of updatedArray) {
    overallRating += obj.rating;
    counter++;
  }
  overallRating = Math.round((overallRating / counter) * 10) / 10;

  const updated = await Courses.findOneAndUpdate(
    { id: courseId },
    { review: updatedArray, overallRating: overallRating }
  );
  console.log(overallRating);
  console.log(updated.overallRating);
  console.log(updated);
  return res.status(200).json(updated);
};

const watchVideo = async (req, res) => {
  const { title, subTitle } = req.body;
  const course = await Course.findOne({ title: title });
  if (!course) {
    return res.status(404).json("No Such Course");
  }
  const subtitle = await Subtitle.findOne({
    courseId: course.id,
    title: subTitle,
  });
  if (!subtitle.video) {
    return res.status(404).json("No Videos Found For This Course");
  }
  return res.status(200).json(subtitle.video);
};

const getExerciseGrade = async (req, res) => {
  const { subTitle, exerciseTitle } = req.body;
  const subtitle = await Subtitle.findOne({
    title: subTitle,
  });
  const exercise = subtitle.exercises.find(
    (element) => element.title == exerciseTitle
  );
  if (!exercise || exercise == "") return res.status(404).json();
  console.log(exercise);
  res.status(200).json(exercise);
};

const addExercise = async (req, res) => {
  const { subTitle, title, grade, maxGrade } = req.body;
  const subtitle = await Subtitle.findOne({ title: subTitle });
  const exercises = subtitle.exercises;
  console.log(subtitle.exercises);
  exercises.push({ title, grade, maxGrade });

  const subtitleUpdated = await Subtitle.findOneAndUpdate(
    { title: subTitle },
    {
      exercises: exercises,
    }
  );
  res.status(200).json(subtitleUpdated);
};
const getTraineeCourses = async (req, res) => {
  try {
    const trainee = await Trainee.findOne({ userid: req.body.id });
    console.log(trainee.registeredcourses);
    return res.status(200).json(trainee);
  } catch (error) {
    return res.status(404).json(error);
  }
};
const addCourseToTrainee = async (req, res) => {
  try {
    const trainee = await Trainee.findOne({ id: req.body.traineeId });
    console.log(trainee);
    trainee.courses.push(req.body.courseId);
    const updatedTrainee = await Trainee.findOneAndUpdate(
      { id: req.body.traineeId },
      { courses: trainee.courses }
    );
    return res.status(200).json(updatedTrainee);
  } catch (error) {
    return res.status(404).json(error);
  }
};

const FindCourses = async (req, res) => {
  const userid = req.query.userId;
  let allcourse = [];
  //console.log(userid)

  try {
    const courses = await Trainee.findOne({ userid: userid });

    console.log(courses.registeredcourses);

    while (courses.registeredcourses.length > 0) {
      console.log(courses.registeredcourses);
      let currentcourse = courses.registeredcourses.pop();
      console.log(currentcourse);
      let course = await Courses.findById(currentcourse);
      allcourse.push(course);
    }
    return res.status(200).json(allcourse);

    //console.log(allcourse)
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  //return res.status(200).json(allcourse);
};

const GetCourseSubtitles = async (req, res) => {
  const courseId = req.query.courseid;
  //console.log(courseId)
  try {
    const subtitles = await Subtitles.find({ courseid: courseId });
    return res.status(200).json(subtitles);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const requestrefund = async (req, res) => {
  const { course, userId } = req.body;
  console.log(userId, course)
  const courseid = course._id
  const coursetitle = course.title
  var trainee
  var user

  try {
    trainee = await Trainee.findOne({ userid: userId })
    user = await User.findById(userId)
    console.log(user)

  } catch (error) {
    return res.status(401).json({ error: "you are not a trainee" })
  }
  console.log(user)
  /*
  Check progress
  */

  const traineeid = trainee._id
  const traineemail = user.email
  try {
    const refund = await RefundRequests.create({ courseid, coursetitle, traineeid, traineemail })
    return res.status(200).json(refund)
  } catch (error) {
    return res.status(401).json({ error: "cannot request refund" })
  }

}


const getwallet = async (req, res) => {
  const userid = req.query.userId;
  console.log(userid)
  try {
    const trainee = await Trainee.findOne({ userid: userid })
    return res.status(200).json(trainee)

  } catch (error) {
    return res.status(401).json({ error: "you are not a trainee" })
  }
}

const registercorporate = async (req, res) => {
  const { courses, userId } = req.body;
  const courseid = courses._id
  const coursetitle = courses.title
  var trainee
  var user

  try {
    trainee = await Trainee.findOne({ userid: userId })
    user = await User.findById(userId)
    console.log(user)

  } catch (error) {
    return res.status(401).json({ error: "you are not a trainee" })
  }
  console.log(user)

  const traineeid = trainee._id
  const traineemail = user.email
 //var instructorid =courses.author
//var payment = courses.price
 //var date = new Date()

 //console.log(instructorid,payment,date)
  try {
    const request = await CourseRequests.create({ courseid, coursetitle, traineeid, traineemail })
   // const pay = await Payments.create({traineeid,courseid,instructorid,date,payment})
    return res.status(200).json(request)
  } catch (error) {
    return res.status(401).json({ error: "cannot request course" })
    
  }
}

const reportproblem = async(req,res)=>{
  const courseid = req.query.courseid;
  const userid=req.query.userid;
  const {reason,details} = req.body;
  var course
  var user
  console.log(userid,courseid)
  try{
    user= await User.findById(userid)
  }catch(error){
  res.status(400).json({error:"couldn't find user"})
  }
  
  try{
     course= await Course.findById(courseid)
   }catch(error){
   res.status(400).json({error:"couldn't find user"})
   }

   var coursetitle =course.title
   var email= user.email

   try{
   const reports = await Reports.create({coursetitle,email,userid,courseid,reason,details})
   return res.status(200).json(reports)
   }catch(error){
    return res.status(400).json({error:"couldn't add report"})
   }


}






module.exports = {
  reportproblem,
  registercorporate,
  getwallet,
  createTrainee,
  updateCourseRating,
  watchVideo,
  getExerciseGrade,
  addExercise,
  getTraineeCourses,
  addCourseToTrainee,
  ViewCorrectAnswers,
  GetCourseSubtitles,
  FindCourses,
  requestrefund,
};
