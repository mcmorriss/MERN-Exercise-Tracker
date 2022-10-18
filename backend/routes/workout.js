const express = require('express');
const Exercise = require('../models/Exercise');

// Router instance.
const router = express.Router();

// Handler.
// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts.'})
})

// GET single workout.
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.json({mssg: `GET a single workout. ID = ${id}`})
})

// POST new workout.
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const exercise = await Exercise.create({title, reps, load})
        res.status(200).json(exercise)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE exisiting workout.
router.delete('/:id', (req, res) => {
    const { id } = req.params
    res.json({mssg: `DELETE a workout id = ${id}`})
})

// UPDATE exisiting workout.
router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})


// Exporting router.
module.exports = router