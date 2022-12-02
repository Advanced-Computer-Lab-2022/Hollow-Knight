const express = require('express')
const router = express.Router()
const Trainee = require('../models/Trainees')
const {createTrainee,FindCourses,GetCourseSubtitles,ViewCorrectAnswers} = require('../controllers/traineescontroller')

router.post('/' , createTrainee)
router.get('/getmycourses' , FindCourses)
router.get('/getsubtitles',GetCourseSubtitles)
router.patch('/getanswers',ViewCorrectAnswers)

module.exports = router