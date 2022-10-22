const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
}, {timestaps : true} )


module.exports = mongoose.model('Course', courseSchema)