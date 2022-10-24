const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AdminSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },