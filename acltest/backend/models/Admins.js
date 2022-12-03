const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    
    userid: { 
            type: mongoose.Types.ObjectId,
            ref:'Users',
            required: true
        }
}, {timestamps : true} )


module.exports = mongoose.model('Admin', adminSchema)