const Admin = require('../models/Admins')
const User =require('../models/userModel') 

const createAdmin = async (req, res) => {
    const {email, password,country,countryAbb} = req.body
    const type= "Admin"
    //const w = await User.findOne({username:name})
 /*   if(w){
        return
    }*/
    try{
    const admin = await User.create({email,password,country,type,countryAbb})
    console.log(admin._id)
    const userid=admin._id
    const user =await Admin.create({userid})
     res.status(200).json(user)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    
   return ;
  
    }

module.exports = {
    createAdmin,
    }