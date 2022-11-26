const express = require('express')
const router = express.Router()
const {updateCountry} = require('../controllers/userController')
const {loginUser} = require('../controllers/userController')
const {signupUser} = require('../controllers/userController')

router.patch('/' , updateCountry)


//login route
router.post('/login', loginUser)
//signup route
router.post('/signup', signupUser)

module.exports = router