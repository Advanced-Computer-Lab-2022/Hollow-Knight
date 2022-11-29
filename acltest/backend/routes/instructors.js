const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructors')
const {createInstructor,updateInstructorCountry,CreateCourse, searchCourse2,ViewReviews, updatemailbiogrpahy, rateinstructor, viewmycourses, applydiscount, CreateSchedule,viewmysubtitles,uploadvideo} = require('../controllers/instructorscontroller')

router.post('/' , createInstructor)
router.patch('/', updateInstructorCountry)
const {searchCourse}=require('../controllers/instructorscontroller');
router.post('/updateinfo', updatemailbiogrpahy)
router.post('/search' , searchCourse)
router.post('/search2' , searchCourse2)
router.post('/rate', rateinstructor)
router.post('/addcourse' , CreateCourse)
router.get('/viewreviews',ViewReviews)
router.get('/viewmycourses', viewmycourses)
router.post('/applydiscount', applydiscount)
router.post('/addsubtitle', CreateSchedule)
router.get('/viewmysubtitles', viewmysubtitles)
router.post('/uploadvideo', uploadvideo)

module.exports = router