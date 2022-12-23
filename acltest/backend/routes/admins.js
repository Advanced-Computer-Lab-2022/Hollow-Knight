const express = require('express')
const router = express.Router()
const Admin = require('../models/Admins')
const {createAdmin} = require('../controllers/adminscontroller.js')
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);  
router.post('/' , createAdmin)

module.exports = router