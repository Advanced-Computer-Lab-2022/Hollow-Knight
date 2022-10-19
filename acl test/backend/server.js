require('dotenv').config()

const express = require('express')
const app = express()
const coursesroute = require('./routes/courses')
const mongoose = require('mongoose')

//app.get('/', (req,res) => {
//    res.json('MAAAAAAAAAAAN')
//})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('man')
        })
    
    })
    .catch((error) => {
        console.log(error)
    })




app.use(express.json())

app.use('/api/courses', coursesroute)

app.use((req,res,ext) => {
    console.log(req.path, req.method)
    next()
})





process.env