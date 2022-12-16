const express = require('express')
const router = express.Router()
const Admin = require('../models/Admins')
const {createAdmin} = require('../controllers/adminscontroller.js')


router.post('/' , createAdmin)

module.exports = router