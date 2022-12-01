const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors')
const {createInstructor,updateInstructorCountry,CreateCourse, searchCourse2,ViewReviews,ViewMyReviews,DeleteCourse,UpdateCourse} = require('../controllers/instructorscontroller')


const {searchCourse,GetCourseById,UpdateContract,addExercise}=require('../controllers/instructorscontroller');


router.post('/' , createInstructor)

router.patch('/', updateInstructorCountry)
router.post('/search' , searchCourse)
router.post('/search2' , searchCourse2)

router.post('/addcourse' , CreateCourse)
router.delete('/deletecourse/:id',DeleteCourse)
router.post('/viewreviews',ViewReviews)
router.get('/reviews' , ViewMyReviews)
router.get('/getcoursebyid' , GetCourseById)
router.patch('/updatecourse/:id',UpdateCourse)
router.patch('/updatecontract',UpdateContract)
router.patch("/addexercise", addExercise)

module.exports = router