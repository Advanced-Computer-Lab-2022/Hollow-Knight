const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors')
const {createInstructor} = require('../controllers/instructorscontroller')

router.post('/' , createInstructor)

module.exports = router