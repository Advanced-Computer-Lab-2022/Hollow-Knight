const express = require('express')
const router = express.Router()
const Course = require('../models/Courses')
const {createCourse, findCourses} = require('../controllers/coursecontroller')

router.get('/' , findCourses)

router.get('/:id', (req,res) => {
  res.json({mssg: 'GET a single course'})
}
)

router.post('/' , createCourse)


router.delete('/:id' , (req, res) => {
    res.json({mssg: 'delete a course'})
     })

router.patch('/:id' , (req, res) => {
    res.json({mssg: 'update a course'})
    })
module.exports = router