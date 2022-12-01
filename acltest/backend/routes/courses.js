const express = require('express')
const router = express.Router()
const Course = require('../models/Courses')
const {findCourses, CourseDetails, getCourse} = require('../controllers/coursescontroller')

router.get('/' , findCourses)

router.get('/:id', getCourse)


router.get('/coursedetails/:id' , CourseDetails)


module.exports = router