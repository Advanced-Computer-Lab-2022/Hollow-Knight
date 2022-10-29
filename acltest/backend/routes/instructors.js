const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors')
const {createInstructor} = require('../controllers/instructorscontroller')
const {searchCourse}=require('../controllers/instructorscontroller');
const {viewCourseInstructor}=require('../controllers/instructorscontroller');

router.post('/' , createInstructor)
router.post('/search' , searchCourse)



module.exports = router