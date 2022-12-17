const express = require('express')
const router = express.Router()
const Admin = require('../models/Admins')
const {createAdmin,viewrequests,makerequest,acceptrequest, rejectrequest} = require('../controllers/adminscontroller.js')
router.get('/requests', viewrequests)
router.post('/' , createAdmin)
router.post('/makerequest', makerequest)
router.post('/acceptrequest', acceptrequest)
router.post('/rejectrequest', rejectrequest)

module.exports = router