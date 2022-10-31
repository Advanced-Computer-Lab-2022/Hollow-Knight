const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors')
const {createInstructor,updateInstructorCountry,CreateCourse} = require('../controllers/instructorscontroller')

router.post('/' , createInstructor)
router.patch('/', updateInstructorCountry)
const {searchCourse}=require('../controllers/instructorscontroller');

router.post('/search' , searchCourse)

router.post('/addcourse' , CreateCourse)


module.exports = router