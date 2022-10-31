const express = require('express')
const router = express.Router()
const {updateCountry} = require('../controllers/userController')

router.patch('/:id' , updateCountry)

module.exports = router