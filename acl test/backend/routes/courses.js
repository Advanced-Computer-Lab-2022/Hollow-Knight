const express = require('express')
const router = express.Router()
const Course = require('../models/Courses')

router.get('/' , (req, res) => {
res.json({mssg: 'get all courses'})
})

router.get('/:id', (req,res) => {
  res.json({mssg: 'GET a single course'})
}
)

router.post('/' , (req, res) => {
    const {title, price, subject, author, rating} = req.body

    try{
        
        const course = Course.create({title, price, subject, author , rating})
    }
    catch (error) {
            res.status(400).json({error: error.message})
    }

    res.json({mssg: 'post new course'})
    })


router.delete('/:id' , (req, res) => {
    res.json({mssg: 'delete a course'})
     })

router.patch('/:id' , (req, res) => {
    res.json({mssg: 'update a course'})
    })
module.exports = router