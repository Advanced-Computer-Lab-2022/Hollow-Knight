const express = require('express')
const router = express.Router()
const Admin = require('../models/Admins')
const {createAdmin,viewrequests,makerequest,acceptrequest, rejectrequest,viewreports,resolvereport,pendreport} = require('../controllers/adminscontroller.js')
router.get('/requests', viewrequests)
router.post('/' , createAdmin)
router.post('/makerequest', makerequest)
router.post('/acceptrequest', acceptrequest)
router.post('/rejectrequest', rejectrequest)
router.get('/reports', viewreports)
router.post('/resolvereport', resolvereport)
router.post('/pendreport', pendreport)

module.exports = router