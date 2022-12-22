const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RefundRequestsSchema = new Schema({
    
courseid: { 
        type: mongoose.Types.ObjectId,
        ref:'Courses',
        required: true
    },
traineeid: { 
    type: mongoose.Types.ObjectId,
    ref:'Trainees',
    required: true
    },
coursetitle:{
    type: String,
    required: true
},
traineemail:{
    type: String,
    required: true
},
}, {timestamps : true} )


module.exports = mongoose.model('RefundRequests', RefundRequestsSchema)