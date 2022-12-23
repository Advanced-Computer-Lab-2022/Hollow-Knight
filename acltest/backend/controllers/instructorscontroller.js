const Instructor = require("../models/Instructors");
const Course = require("../models/Courses");
const User = require("../models/userModel");
const Subtitle = require("../models/Subtitles");
const Subtitles = require("../models/Subtitles");
const Payments = require("../models/Payments");
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
///////////////
const UpdateContract = async (req, res) => {
  const userid = req.query.userId;
  const Status = req.body.Status;
  const percent = req.body.percent;
  var instrcutor;

  console.log(userid);
  try {
    instrcutor = await Instructor.findOne({ userid: userid });
  } catch (error) {
    return res.status(400).json("couldn't find instructor");
  }

  var authorid = instrcutor._id;
  console.log(req.body);
  try {
    const course = await Instructor.findByIdAndUpdate(authorid, {
      contract: { Status: Status, percent: percent },
    });
    //{Status:Status}
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const createInstructor = async (req, res) => {
  const { email, password, country, countryAbb } = req.body;

  const type = "Instructor";

  try {
    const instructor = await User.create({
      email,
      password,
      country,
      type,
      countryAbb,
    });
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
};

const CreateCourse = async (req, res) => {
  const userid = req.query.userId;

  const instructor = await Instructor.findOne({ userid: userid });
  console.log(instructor._id);
  if (
    instructor.contract.Status == "Pending" ||
    instructor.contract.Status == "Rejected"
  ) {
    return res.status(400).json({
      error: "You Can't create a course without accepting the contract ",
    });
  }
  const author = instructor._id;

  const { title, price, subject, summary, total_hours } = req.body;

  try {
    const course = await Course.create({
      title,
      price,
      subject,
      author,
      summary,
      total_hours,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
  const { title, price, subject, summary, total_hours } = req.body;
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
  const userid = req.query.userId;
  const instructor = await Instructor.findOne({ userid: userid });
  //console.log(instructor._id)
  const insid = instructor._id;

  const { title } = req.body;
  //console.log(title, userid);
  try {
    const course = await Course.find({ title: title });
    //console.log(JSON.stringify(course[0].author))
    if (JSON.stringify(course[0].author) === JSON.stringify(insid)) {
      return res.status(200).json(course);
    } else {
      return res
        .status(400)
        .json({ error: "This is not your course to access" });
    }
  } catch (error) {
    return res.status(400).json({ error: "course Doesn't exist" });
  }
};

const getinstructorfromuserid = async (req, res) => {
  const userid = req.query.userId;
  console.log(userid);

  try {
    const instructor = await Instructor.findOne({ userid: userid });
    return res.status(200).json(instructor);
  } catch (error) {
    return res.status(400).json({ error: "can't find instructor" });
  }
};

const updatemailbiogrpahy = async (req, res) => {
  //  const {username, password, biography,mail} = req.body
  const instruct = "Instructor";
  try {
    const instructor = await User.findOne({
      username: req.body.username,
      password: req.body.password,
      type: instruct,
    });
    if (!instructor) {
      res.status(404).json("not found");
      return;
    }

    if (req.body.mail) {
      const updatemail = await User.findOneAndUpdate(
        {
          username: req.body.username,
          password: req.body.password,
          type: instruct,
        },
        { email: req.body.mail }
      );
    }
    var ObjectId = require("mongoose").Types.ObjectId;
    var userid = instructor._id;
    if (req.body.biography) {
      const updatebiography = await Instructor.findOneAndUpdate(
        { userid: userid },
        { biography: req.body.biography }
      );
    }
    res.status(200).json("success");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  return;
};

const rateinstructor = async (req, res) => {
  //  const {username, password, biography,mail} = req.body
  const instruct = "Instructor";
  const trainer = "Trainee";
  const courseid = req.query.courseId;
  console.log("hi");
  console.log(req.body.username);
  console.log(req.body.review);
  try {
    const trainee = await User.findOne({
      username: req.body.username,
      type: trainer,
    });
    console.log(trainee);
    if (!trainee) {
      res.status(404).json("trainee not found");
      return;
    }
    const courseinq = await Course.findOne({ _id: courseid });
    console.log(courseinq);
    const authorid = courseinq.author;
    const instructorinq = await Instructor.findOne({ _id: authorid });
    console.log("THE INSTRUCTOR");
    console.log(instructorinq);
    if (!instructorinq) {
      res.status(404).json("not found bobobo");
      return;
    }
    //  console.log(instructor)
    const traineeid = trainee._id;
    console.log(traineeid);
    const userid = instructorinq.userid;
    console.log("this guys ratings");
    console.log(instructorinq.review);

    var check = false;
    for (const obj of instructorinq.review) {
      if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
        console.log("he rated him");
        check = true;
        break;
      }
      if (!check) {
        console.log("he didnt rate him");
      }
    }
    if (req.body.review) {
      if (check == false) {
        const updaterating = await Instructor.findOneAndUpdate(
          { userid: userid },
          {
            $push: {
              review: {
                rating: req.body.review,
                reviews: req.body.desc,
                traineeid: traineeid,
              },
            },
          }
        );
        console.log("-----THE UPDATED RATING-----:");
        console.log(updaterating);
        res.status(200).json("added");
        return;
      } else {
        console.log("in the else");
        const newlist = instructorinq.review;
        console.log("newlist: " + newlist);
        for (const obj of newlist) {
          if (JSON.stringify(obj.traineeid) === JSON.stringify(traineeid)) {
            obj.rating = req.body.review;
            obj.reviews = req.body.desc;
          }
        }
        const updaterating = await Instructor.findOneAndUpdate(
          { userid: userid },
          { review: newlist }
        );
        res.status(200).json("updated");
        var sum = 0;
        for (const obj of newlist) {
          sum += obj.rating;
        }
        console.log("here    ----" + sum + " " + newlist.length);
        var newaverage = sum / newlist.length;
        const updatetotal = await Instructor.findOneAndUpdate(
          { userid: userid },
          { overallRating: newaverage }
        );
        console.log("updatetotal:" + updatetotal);
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  return;
};

const viewmycourses = async (req, res) => {
  //  const {username, password, biography,mail} = req.body
  const instruct = "Instructor";
  const userid = req.query.userId;
  const instructor = await Instructor.findOne({ userid: userid });

  console.log(instructor);
  const insid = instructor._id;
  try {
    console.log(req.query.userId);
    const courses = await Course.find({ author: insid });
    res.status(200).json(courses);
    console.log(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  return;
};

const viewmysubtitles = async (req, res) => {
  //  const {username, password, biography,mail} = req.body
  const instruct = "Instructor";
  const mostak = req.query.courseId;
  try {
    const subtitles = await Subtitles.find({ courseid: mostak });
    res.status(200).json(subtitles);
    console.log(subtitles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  return;
};

const applydiscount = async (req, res) => {
  var { percent, startm, startd, starty, endm, endd, endy } = req.body;
  const instruct = "Instructor";
  const id = req.query.courseId;

  const start_date = startm + "-" + startd + "-" + starty;
  const end_date = endm + "-" + endd + "-" + endy;
  console.log(start_date, end_date);
  try {
    console.log(id);

    const updating2 = await Course.findByIdAndUpdate(id, {
      discount: {
        percent: percent,
        start_date: start_date,
        end_date: end_date,
      },
    });
    res.status(200).json("success!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  return;
};

const CreateSchedule = async (req, res) => {
  const instruct = "Instructor";
  const mostak = req.query.courseId;
  try {
    const courses = await Course.findOne({ _id: mostak });
    const newsched = await Subtitles.create({
      Title: req.body.name,
      TotalHours: req.body.hour,
      courseid: mostak,
    });
    res.status(200).json("success!");
    console.log(courses);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const uploadvideo = async (req, res) => {
  const link = req.body.link;
  const desc = req.body.desc;
  try {
    const myArray = link.split("=");
    console.log(myArray);
    console.log("hi");
    const updating = await Subtitles.findOneAndUpdate(
      { _id: req.query.subtitleId },
      {
        $push: {
          video: { link: myArray[1], description: req.body.description },
        },
      }
    );
    const course = await Course.findOne({ _id: updating.courseid });
    const updatedCourse = await Course.findOneAndUpdate(
      { _id: updating.courseid },
      { maxProgress: course.maxProgress + 1 }
    );
    res.status(200).json("success!");
    console.log(updatedCourse);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const addExercise = async (req, res) => {
  const { title, maxGrade, problems } = req.body;
  const subtitle = await Subtitles.findOne({ _id: req.query.subtitleId });
  const exercisesArray = subtitle.exercises;
  console.log(subtitle);
  exercisesArray.push({ title, maxGrade, problems });
  const updatedSubtitle = await Subtitles.findOneAndUpdate(
    { _id: req.query.subtitleId },
    { exercises: exercisesArray }
  );
  return res.status(200).json(updatedSubtitle);
};

const getuserfrominsid = async (req, res) => {
  const aid = req.query.authorid;
  console.log(aid);
  var instructor;
  var user;
  try {
    instructor = await Instructor.findById(aid);
    console.log("found instructor");
  } catch (error) {
    return res.status(401).json({ error: "couldn't find instructor " });
  }
  const userid = instructor.userid;
  try {
    user = await User.findById(userid);
    console.log("found user", user.first_name, user.last_name);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({ error: "couldn't find user " });
  }
};
const getmonthlypay = async (req, res) => {
  const userid = req.query.userId;
  console.log(userid);
  var instrcutor;
  try {
    instrcutor = await Instructor.findOne({ userid: userid });
    console.log(instrcutor);
  } catch (error) {
    return res.status(400).json({ error: "couldn't find instructor" });
  }

  var instructorid = instrcutor._id;
  var pays;
  var totalamount = 0;
  try {
    pays = await Payments.find({ instructorid: instructorid });

    console.log(pays);
  } catch (error) {
    return res.status(400).json({ error: "couldn't find payments" });
  }
  var todaydate = new Date();
  while (pays.length > 0) {
    let current = pays.pop();
    let currentamount = parseInt(current.payment);
    console.log(todaydate.getMonth(), current.date.getMonth());
    if (
      current.date.getMonth() == todaydate.getMonth() &&
      current.date.getFullYear() == todaydate.getFullYear()
    ) {
      totalamount = totalamount + currentamount;
    }
    console.log(totalamount);
  }
  return res.status(200).json(totalamount);
};

module.exports = {
  createInstructor,
  updateInstructorCountry,
  searchCourse,
  CreateCourse,
  searchCourse2,
  ViewReviews,
  addExercise,
  getmonthlypay,
  DeleteCourse,
  UpdateCourse,
  GetCourseById,
  UpdateContract,
  updatemailbiogrpahy,
  rateinstructor,
  viewmycourses,
  applydiscount,
  CreateSchedule,
  viewmysubtitles,
  uploadvideo,
  getuserfrominsid,
  getinstructorfromuserid,
};
