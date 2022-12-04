require('dotenv').config()

const express = require('express')
const app = express()
const coursesroute = require('./routes/courses')
const usersroute = require('./routes/users')
const instructorsroute = require('./routes/instructors')
const traineesroute = require('./routes/trainees')
const adminsroute = require('./routes/admins')
const mongoose = require('mongoose')



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(process.env.PORT)
        })
    
    })
    .catch((error) => {
        console.log(error)
    })




app.use(express.json())

app.use('/api/courses', coursesroute)
app.use('/api/instructors', instructorsroute)
app.use('/api/trainees', traineesroute)
app.use('/api/admins', adminsroute)
app.use('/api/users', usersroute)







process.env