const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors')
const {createInstructor,updateInstructorCountry} = require('../controllers/instructorscontroller')

router.post('/' , createInstructor)
router.patch('/', updateInstructorCountry)

module.exports = router