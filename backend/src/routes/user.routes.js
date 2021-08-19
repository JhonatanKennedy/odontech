const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/userController');
const MedicalRecordController = require('../controllers/medicalRecordController');

routes.post('/', UserController.CreateUser);                                      //posso criar usuario

routes.put('/:id', UserController.EditUser);                                      //posso editar usuario

routes.get('/:userId', MedicalRecordController.ListMedicalRecords);               //posso listar meus prontuarios

routes.get('/users/:id', UserController.GetUser);

module.exports = routes;