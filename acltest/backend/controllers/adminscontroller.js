const Admin = require('../models/Admins')
const User =require('../models/Users') 

const createAdmin = async (req, res) => {
    const {username, password,country} = req.body
    const type= "Admin"
    //const w = await User.findOne({username:name})
 /*   if(w){
        return
    }*/
    try{
    const admin = await User.create({username,password,country,type})
    res.json({mssg: 'user added'})
    console.log(admin._id)
    const userid=admin._id
    const user =await Admin.create({userid})

    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    
   return ;
  
    }

module.exports = {
    createAdmin,
    }