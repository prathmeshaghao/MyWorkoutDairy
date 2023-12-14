const express = require('express')
const { createWorkout,
        getWorkout,
        getWorkouts,
        deleteWorkout,
        updateWorkout} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')        

const router = express.Router()

//req auth for all workouts
router.use(requireAuth)

//Get all workouts
router.get('/', getWorkouts)

//Get a single workouts
router.get('/:id', getWorkout)

//Post a new workout
router.post('/',createWorkout)

//Delete a new workout workouts
router.delete('/:id', deleteWorkout)

//UPDATE a new workout workouts
router.patch('/:id',updateWorkout)

module.exports = router