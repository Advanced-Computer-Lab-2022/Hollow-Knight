const mongoose = require('mongoose')

const Schema = mongoose.Schema

const traineeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userid: { 
        type: mongoose.Types.ObjectId,
        ref:'Users',
        required: true
    }
}, {timestaps : true} )


module.exports = mongoose.model('Trainee', traineeSchema)