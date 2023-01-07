const express = require('express')
const router = express.Router()
const Admin = require('../models/Admins')
const requireAuth = require("../middleware/requireAuth");
const {createAdmin,viewrequests,makerequest,acceptrequest, rejectrequest,viewreports,resolvereport,pendreport,viewrefunds,addfunds,denyfunds,makerefund} = require('../controllers/adminscontroller.js')

router.use(requireAuth);  
router.get('/requests', viewrequests)
router.post('/' , createAdmin)
router.post('/makerequest', makerequest)
router.post('/makerefund', makerefund)
router.post('/acceptrequest', acceptrequest)
router.post('/rejectrequest', rejectrequest)
router.get('/reports', viewreports)
router.get('/refunds', viewrefunds)
router.post('/resolvereport', resolvereport)
router.post('/pendreport', pendreport)
router.post('/addfunds', addfunds)
router.post('/denyfunds', denyfunds)

module.exports = router