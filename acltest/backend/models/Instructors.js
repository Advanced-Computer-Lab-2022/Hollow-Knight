const mongoose = require('mongoose')

const Schema = mongoose.Schema

const instructorSchema = new Schema({
    userid: { 
        type: mongoose.Types.ObjectId,
        ref:'Users',
        required: true
    },

    biography: {
        type: String,
        required: false
    }
}, {timestaps : true} )


module.exports = mongoose.model('Instructors', instructorSchema)