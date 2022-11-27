const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors');

const {createInstructor,updateInstructorCountry,CreateCourse, searchCourse2} = require('../controllers/instructorscontroller')


const {searchCourse}=require('../controllers/instructorscontroller');

//requireAuth is a middleware that checks if the user is logged in or not

router.post('/' , createInstructor)
router.patch('/', updateInstructorCountry)


router.post('/search' , searchCourse)
router.post('/search2' , searchCourse2)

router.post('/addcourse' , CreateCourse)


module.exports = router