const Trainee = require("../models/Trainees");
const User = require("../models/userModel");
const Courses = require("../models/Courses");
const Course = require("../models/Courses");
const Instructors = require("../models/Instructors");
const Subtitle = require("../models/Subtitles");
const Subtitles = require("../models/Subtitles");
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
    const trainee = await Trainee.findOne({ userid: req.body.userId });
    //console.log(trainee.registeredcourses);
    for (const obj of trainee.registeredcourses) {
      if (obj == req.body.courseId) {
        return res.status(404).json({ error: "Course already added" });
      }
    }
    trainee.registeredcourses.push(req.body.courseId);
    trainee.courseProgression.push({ courseId: req.body.courseId });
    const updatedTrainee = await Trainee.findOneAndUpdate(
      { userid: req.body.userId },
      {
        registeredcourses: trainee.registeredcourses,
        courseProgression: trainee.courseProgression,
      }
    );
    console.log(updatedTrainee);

    giveAllVideosToTrainee(req, res);
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
      var course = await Courses.findById(currentcourse);
      for (const obj of courses.courseProgression) {
        if (JSON.stringify(obj.courseId) == JSON.stringify(currentcourse)) {
          course.traineeProgression = obj.progression;
        }
      }
      course.traineeProgression =
        (course.traineeProgression / course.maxProgress) * 100;
      course.traineeProgression =
        Math.round(course.traineeProgression * 10) / 10;
      console.log(course);
      allcourse.push(course);
    }
    //console.log(allcourse);
    return res.status(200).json(allcourse);

    //console.log(allcourse)
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  //return res.status(200).json(allcourse);
};

const GetCourseSubtitles = async (req, res) => {
  const courseId = req.query.courseid;
  try {
    const subtitles = await Subtitles.find({ courseId: courseId });
    return res.status(200).json(subtitles);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const increaseTraineeProgression = async (req, res) => {
  var progression;
  try {
    const trainee = await Trainee.findOne({ userid: req.body.userId });
    console.log(trainee);
    for (const obj of trainee.courseProgression) {
      if (JSON.stringify(obj.courseId) == JSON.stringify(req.body.courseId)) {
        progression = obj.progression;
        for (const video of obj.videos) {
          console.log(JSON.stringify(req.body.videoId));
          if (
            JSON.stringify(video.videoId) == JSON.stringify(req.body.videoId) &&
            !video.finished
          ) {
            obj.progression += 1;
            console.log(obj.progression);
            progression = obj.progression;
            video.finished = true;
          }
        }

        break;
      }
    }
    const updatedTrainee = await Trainee.findOneAndUpdate(
      { userid: req.body.userId },
      { courseProgression: trainee.courseProgression }
    );
    console.log(progression);
    return res.status(200).json(progression);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const giveAllVideosToTrainee = async (req, res) => {
  try {
    const trainee = await Trainee.findOne({ userid: req.body.userId });
    const subtitles = await Subtitle.find({ courseid: req.body.courseId });
    var videoArray = [];
    for (const subtitle of subtitles) {
      for (const video of subtitle.video) {
        console.log(video._id);
        //videoArray.push({video._id});
        for (const obj of trainee.courseProgression) {
          if (obj.courseId == req.body.courseId)
            obj.videos.push({ videoId: video._id });
        }
      }
    }
    console.log(videoArray);
    //trainee.courseProgression.push({ videos: videoArray });
    const updatedTrainee = await Trainee.findOneAndUpdate(
      { userid: req.body.userId },
      { courseProgression: trainee.courseProgression }
    );
    return res.status(200).json(updatedTrainee);
  } catch (error) {}
};

module.exports = {
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
  increaseTraineeProgression,
  giveAllVideosToTrainee,
};
