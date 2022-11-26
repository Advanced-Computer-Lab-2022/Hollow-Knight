const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors')
const {createInstructor,updateInstructorCountry,CreateCourse, searchCourse2,ViewReviews} = require('../controllers/instructorscontroller')

router.post('/' , createInstructor)
router.patch('/', updateInstructorCountry)
const {searchCourse}=require('../controllers/instructorscontroller');

router.post('/search' , searchCourse)
router.post('/search2' , searchCourse2)

router.post('/addcourse' , CreateCourse)
router.get('/viewreviews',ViewReviews)

module.exports = router