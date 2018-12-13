const express = require('express')
const router = express.Router()
const db = require('../db')
const Campus = require('../db/models/campuses')

router.get('/', async (req,res,next) => {
    await Campus.findAll()
    .then(response => res.json(response))
    .catch(next)
})

router.get('/:campusId', async(req,res,next) => {
    await Campus.findById(req.params.campusId)
    .then(response => res.json(response))
    .catch(next)
})

router.post('/', (req,res,next)=> {
    Campus.create(req.body)
    .then(campus=> res.json(campus))
    .catch(next);
})

router.delete('/:campusId', (req, res, next) => {
    Campus.destroy({
      where: {
        id: req.params.campusId
      }
    })
      .then(() => {
        console.log('deleted the campus entry');
      })
  });
  

module.exports = router