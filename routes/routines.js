const express = require('express');
const routinesController = require('../controllers/allRoutines');
const deleteOneRoutineController = require('../controllers/deleteOneRoutine');
const oneRoutineController = require('../controllers/oneRoutine');
const createRoutineController = require('../controllers/createRoutine');

const router = express.Router();

router.delete('/routines/:id', deleteOneRoutineController.deleteOneRoutine);
router.delete('/:id', deleteOneRoutineController.deleteOneRoutine);
router.put('/routines/:id', deleteOneRoutineController.deleteOneRoutine);
router.put('/:id', deleteOneRoutineController.deleteOneRoutine);
router.get('/', routinesController.getAllRoutines);
router.get('/routines', routinesController.getAllRoutines);
router.get('/:id', oneRoutineController.getOneRoutine);
router.get('/routines/:id', oneRoutineController.getOneRoutine);
router.post('/', createRoutineController.createRoutine);
router.post('/routines', createRoutineController.createRoutine);

module.exports = router;