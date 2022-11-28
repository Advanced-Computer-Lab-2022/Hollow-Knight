const express = require('express')
const router = express.Router()
const {updateCountry, changePassword, changePassword1, forgotPassword, sendEmail} = require('../controllers/userController')
const {loginUser} = require('../controllers/userController')
const {signupUser} = require('../controllers/userController')

router.patch('/' , updateCountry)

router.post('/changepassword' , changePassword)
//login route
router.post('/login', loginUser)
//signup route
router.post('/signup', signupUser);

router.post('/forgotpassword' , forgotPassword)
router.post('/changepassword/:token' , changePassword1)
router.post('/sendmail' , sendEmail)

module.exports = router