const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userschema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
    ,
    type:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }

}, {timestaps : true} )


module.exports = mongoose.model('Users',userschema )