const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReportsSchema = new Schema({
    
    courseid: { 
            type: mongoose.Types.ObjectId,
            ref:'Courses',
            required: true
        },
    userid: { 
        type: mongoose.Types.ObjectId,
        ref:'Trainees',
        required: true
        },
    coursetitle:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: false,
        default:"unseen"
    },
    comments:{
        type: String,
        required: false,
        default:"none"
    }
}, {timestamps : true} )


module.exports = mongoose.model('Reports', ReportsSchema)