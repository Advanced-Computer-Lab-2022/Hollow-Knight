const Instructor = require("../models/Instructors");
const Course = require("../models/Courses");
const User = require("../models/Users");
const Subtitle = require("../models/Subtitles");
const Subtitles = require("../models/Subtitles");
const { default: mongoose } = require("mongoose");

const GetCourseById = async (req, res) => {
  const CourseId = req.query.courseId;
  try {
    const course = await Course.findById(CourseId);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const UpdateContract = async (req, res) => {
  const CourseId = req.query.courseId;
  const Status = req.body.Status;
  const percent = req.body.percent;
  console.log(req.body);
  try {
    const course = await Course.findByIdAndUpdate(CourseId, {
      contract: { Status: Status, percent: percent },
    });
    //{Status:Status}
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const createInstructor = async (req, res) => {
  const { username, password, country } = req.body;
  const type = "Instructor";

  try {
    const instructor = await User.create({ username, password, country, type });
    console.log(instructor._id);
    const userid = instructor._id;
    const user = await Instructor.create({ userid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "user added" });
};
const updateInstructorCountry = async (req, res) => {
  const instructor = await Instructor.findOneAndUpdate(
    { name: req.body.name },
    {
      country: req.body.country,
    }
  );
  if (!instructor) {
    return;
  }
  res.status(200).json(instructor);
};

// search for a course given by him/her based on course title or subject or instructor or price
const searchCourse = async (req, res) => {
  const { name } = req.body;
  const { title } = req.body;
  const { subject, price } = req.body;

  try {
    if (title) {
      const course = await Course.find({ title: title, author: name });
      return res.status(200).json(course);
    }
    if (subject) {
      const course = await Course.find({ subject: subject, author: name });
      return res.status(200).json(course);
    }

    if (price) {
      const course = await Course.find({ price: price, author: name });
      return res.status(200).json(course);
    }
    if (name) {
      const course = await Course.find({ author: name });
      return res.status(200).json(course);
    }

    throw new Error("Course not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const searchCourse2 = async (req, res) => {
  const { name } = req.body;
  const { title } = req.body;
  const { subject, price } = req.body;

  try {
    if (title) {
      const course = await Course.find({ title: title });
      return res.status(200).json(course);
    }
    if (subject) {
      const course = await Course.find({ subject: subject });
      return res.status(200).json(course);
    }

    if (price) {
      const course = await Course.find({ price: price });
      return res.status(200).json(course);
    }
    if (name) {
      const course = await Course.find({ author: name });
      return res.status(200).json(course);
    }

    throw new Error("Course not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });

}
}



const CreateCourse =async (req,res) =>{
    const author = req.query.userId;
    const {title,price,subject,summary,total_hours} = req.body
   
       try{
          const course = await Course.create({title,price,subject,author,summary,total_hours})
          res.status(200).json(course)
       }
       catch(error){
             res.status(400).json({error :error.message})
       }
      
      
}


const DeleteCourse = async (req, res) => {
  const { id } = req.params;
  const userId = req.query.userId;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Course Doesn't Exist" });
  }
  const course = await Course.findOneAndDelete({ _id: id, author: userId });
  if (!course) {
    return res.status(400).json({ error: "You Don't have such a Course" });
  }
  res.status(200).json(course);
};

const UpdateCourse = async (req, res) => {
  const { id } = req.params;
  const userId = req.query.userId;
  const {
    title,
    price,
    subject,
    summary,
    total_hours,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Course Doesn't Exist" });
  }

  if (req.body.title) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: userId },
      { title: title }
    );
  }

  if (req.body.price) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: userId },
      { price: price }
    );
  }

  if (req.body.subject) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: userId },
      { subject: subject }
    );
  }

  if (req.body.subtitles_hours) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: userId },
      { subtitles_hours: subtitles_hours }
    );
  }

  if (req.body.subtitles) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: userId },
      { subtitles: subtitles }
    );
  }

  if (req.body.summary) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: userId },
      { summary: summary }
    );
  }
  if (req.body.excercises) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: excercises },
      { excercises: excercises }
    );
  }
  if (req.body.total_hours) {
    const course = await Course.findOneAndUpdate(
      { _id: id, author: userId },
      { total_hours: total_hours }
    );
  }
  /*
    if(!course){
        return res.status(400).json({error:"You Don't have such a Course"})
    } */
  res.status(200).json(req.body);
};

const ViewReviews = async (req, res) => {
  const name = req.query.userId;
  const { title } = req.body;
  console.log(title, name);
  try {
    const course = await Course.find({ author: name, title: title });
    console.log(course)
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const ViewMyReviews = async (req, res) => {
  const name = req.query.userId;
  console.log(name);
  try {
    const course = await Instructor.find({ userid: name });
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updatemailbiogrpahy = async (req, res) => {
  //  const {username, password, biography,mail} = req.body
    const instruct = "Instructor"
    try{
   const instructor = await User.findOne({username: req.body.username, password: req.body.password, type: instruct})
   if(!instructor){
    res.status(404).json("not found")
    return
   }
   
    if(req.body.mail) {
    const updatemail = await User.findOneAndUpdate({username: req.body.username, password: req.body.password, type: instruct}, {email:req.body.mail})
    }
    var ObjectId = require('mongoose').Types.ObjectId;
    var userid = instructor._id
    if(req.body.biography){
        const updatebiography = await Instructor.findOneAndUpdate({userid: userid}, {biography: req.body.biography})
    }
    res.status(200).json("success")
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    
   return ;
  
    }

    const rateinstructor = async (req, res) => {
        //  const {username, password, biography,mail} = req.body
          const instruct = "Instructor"
          const trainer = "Trainee"
          try{
         const trainee = await User.findOne({username : req.body.traineeusername, type : trainer})
        if(!trainee){
            res.status(404).json("trainee not found")
        }
         const instructor = await User.findOne({username: req.body.instructorusername})
         if(!instructor){
          res.status(404).json("not found")
          return
         }
       //  console.log(instructor)
          const traineeid = trainee._id
          console.log(traineeid)
          const userid = instructor._id
          const findinst= await Instructor.findOne({userid: userid})
          console.log(findinst.rating)
        
          var check = false
          for (const obj of findinst.rating) {
            if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
              check = true
              break;
            }
          }
          if(req.body.review){
        if(check == false){
        const updaterating = await Instructor.findOneAndUpdate({userid: userid}, {$push : {rating: { review : req.body.review, traineeid : traineeid} }})
         res.status(200).json("added")
         return
        }
        else{
            console.log("in the else")
            const newlist = findinst.rating
            console.log("newlist: " + newlist)
            for (const obj of newlist) {
                if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
                    obj.review = req.body.review
        }
    }
        const updaterating = await Instructor.findOneAndUpdate({userid: userid}, {rating: newlist})
        res.status(200).json("updated")
        var sum = 0
        for (const obj of newlist) {
            if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
                sum += obj.review
          }
          var newaverage = sum/newlist.length
          const updatetotal = await Instructor.findOneAndUpdate({userid: userid}, {overallRating : newaverage})
          console.log("updatetotal:" + updatetotal)
        }

    }
          }
        }
          catch (error) {
              res.status(400).json({error: error.message})
          }
          
         return ;
        
          }


const viewmycourses = async (req, res) => {
//  const {username, password, biography,mail} = req.body
     const instruct = "Instructor"
     const mostak = req.query.userId
    try{
    console.log(req.query.userId)
    const courses = await Course.find({author: mostak})
    res.status(200).json(courses)
    console.log(courses)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }

const viewmysubtitles = async (req, res) => {
//  const {username, password, biography,mail} = req.body
     const instruct = "Instructor"
     const mostak = req.query.courseId
    try{
    const subtitles = await Subtitles.find({courseid: mostak})
    res.status(200).json(subtitles)
    console.log(subtitles)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }  

const applydiscount = async (req, res) => {
//  const {username, password, biography,mail} = req.body
     const instruct = "Instructor"
     const mostak = req.query.courseId
    try{
    const courses = await Course.findOne({_id: mostak})
    var money = courses.price
    console.log(money)
    var newmoney = money - req.body.discount
    const updating = await Course.findOneAndUpdate({_id: mostak}, {price: newmoney})
    res.status(200).json("success!")
    console.log(courses)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }

 
const CreateSchedule =async (req,res) =>{
    const instruct = "Instructor"
     const mostak = req.query.courseId
    try{
    const courses = await Course.findOne({_id: mostak})
    const newsched = await Subtitles.create({Title:req.body.name, TotalHours: req.body.hour, courseid: mostak})
    res.status(200).json("success!")
    console.log(courses)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
                  
            }
            


const uploadvideo = async (req, res) => {
     const link = req.body.link
     const desc = req.body.desc
    try{
    const myArray = link.split("=");
    console.log(myArray)
    console.log("hi")
    const updating = await Subtitles.findOneAndUpdate({_id:req.query.subtitleId}, {$push : {video: { link : myArray[1], description : req.body.description} }})
    res.status(200).json("success!")
    console.log(updating)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
              
             return ;
            
              }

const addExercise = async (req, res) => {
    const { title, maxGrade, problems } = req.body;
    const subtitle = await Subtitles.findOne({ _id: req.query.subtitleId});
    const exercisesArray = subtitle.exercises;
    console.log(subtitle);
    exercisesArray.push({ title, maxGrade, problems });
    const updatedSubtitle = await Subtitles.findOneAndUpdate(
      { _id: req.query.subtitleId },
      { exercises: exercisesArray }
    );
    return res.status(200).json(updatedSubtitle);
  };




    module.exports = {
      createInstructor,
      updateInstructorCountry,
      searchCourse,
      CreateCourse,
      searchCourse2,
      ViewReviews,
      addExercise,
      ViewMyReviews,
      DeleteCourse,
      UpdateCourse,
      GetCourseById,
      UpdateContract,
      updatemailbiogrpahy,
      rateinstructor,
      viewmycourses,
      applydiscount,
      CreateSchedule,viewmysubtitles,uploadvideo,
    };