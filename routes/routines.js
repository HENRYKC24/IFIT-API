// import all the controllers for all routes
const express = require('express');
const routinesController = require('../controllers/allRoutines');
const deleteOneRoutineController = require('../controllers/deleteOneRoutine');
const oneRoutineController = require('../controllers/oneRoutine');
const createRoutineController = require('../controllers/createRoutine');
const editRoutineController = require('../controllers/editOneRoutine');
const userLoginController = require('../controllers/userLogin');
const registerUserController = require('../controllers/registerUser');
const recoverPassword = require('../controllers/recoverPassword');

const router = express.Router();

router.delete('/routines/:id', deleteOneRoutineController.deleteOneRoutine);
router.delete('/:id', deleteOneRoutineController.deleteOneRoutine);
// router.put('/routines/:id', deleteOneRoutineController.deleteOneRoutine);
// router.put('/:id', deleteOneRoutineController.deleteOneRoutine);
router.get('/', routinesController.getAllRoutines);
router.get('/routines', routinesController.getAllRoutines);
router.get('/:id', oneRoutineController.getOneRoutine);
router.get('/routines/:id', oneRoutineController.getOneRoutine);
router.post('/', createRoutineController.createRoutine);
router.post('/routines', createRoutineController.createRoutine);
router.post('/login', userLoginController.login);
router.post('/register', registerUserController.register);
router.post('/recover', recoverPassword.recover);
router.put('/:id', editRoutineController.editOneRoutine);
router.put('/routines/:id', editRoutineController.editOneRoutine);

module.exports = router;
