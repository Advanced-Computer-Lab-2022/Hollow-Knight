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
        required: false
    },
    author: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
        subtitles: {
        type: String,
        required: true
    },
    subtitles_hours: {
        type: Number,
        required: false
    },
    summary: {
        type: String,
        required: true
    },
    excercises: {
        type: String,
        required: false
    }
    ,
    total_hours: {
        type: Number,
        required: false
    }
}, {timestaps : true} )


module.exports = mongoose.model('Course', courseSchema)
