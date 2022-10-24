const Admin = require('../models/Admins')

const createAdmin = async (req, res) => {
    const {name, password} = req.body

    try{
        
        const admin = await Admin.create({name,password})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'user added'})
    }

module.exports = {
    createAdmin,
    }