const express = require('express')
const router = express.Router()
const db = require('../db')
const Student = require('../db/models/students')

router.get('/', async (req,res,next) => {
    await Student.findAll()
    .then(response => res.send(response))
    .catch(next)
})

router.get('/:studentId', async(req,res,next) => {
    await Student.findById(req.params.studentId)
    .then(response => res.json(response))
    .catch(next)
})

router.post('/', async(req,res,next)=> {
    Student.create(req.body)
    .then(response=> res.json(response))
    .catch(next)
})
router.delete('/:studentId', (req,res,next) => {
    Student.destroy({
        where: {
            id:req.params.studentId
        }
    }).then(()=> {
        console.log('student is gone')
    })
})

module.exports = router