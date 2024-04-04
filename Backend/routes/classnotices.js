const Classnotice = require('../models/classnoticeModel')
const mongoose = require('mongoose')

const express = require('express')
const router = express.Router()

// GET all workouts
router.get('/', async (req, res) => {
  const notices = await Classnotice.find({}).sort({createdAt: -1})

  res.status(200).json(notices)
})

// GET a single workout
router.get('/:id', async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such notice'})
  }

  const notice = await Classnotice.findById(id)

  if (!notice) {
    return res.status(404).json({error: 'No such notice'})
  }

  res.status(200).json(notice)
})

// POST a new workout
router.post('/', async (req, res) => {
  const {grade, clznotice} = req.body

  let emptyFields = [];

  if(!grade) {
    emptyFields.push('grade')
  }
  if(!clznotice) {
    emptyFields.push('clznotice')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({error:'Please fill in all the fields',emptyFields})
  }

  // add to the database
  try {
    const notice = await Classnotice.create({ grade, clznotice })
    res.status(200).json(notice)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// DELETE a workout
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such notice'})
  }

  const notice = await Classnotice.findOneAndDelete({_id: id})

  if(!notice) {
    return res.status(400).json({error: 'No such notice'})
  }

  res.status(200).json(notice)
})

// UPDATE a workout
router.patch('/:id', async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such notice'})
  }

  const notice = await Classnotice.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!notice) {
    return res.status(400).json({error: 'No such notice'})
  }

  res.status(200).json(notice)
})




module.exports = router