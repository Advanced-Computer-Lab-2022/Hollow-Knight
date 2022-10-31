const express = require('express')
const router = express.Router()
const Trainee = require('../models/Trainees')
const {createTrainee} = require('../controllers/traineescontroller')

router.post('/:id' , createTrainee)

module.exports = router