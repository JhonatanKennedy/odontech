const express = require('express');
const routes = express.Router();
const MedicalRecordController = require('../controllers/medicalRecordController');
const UserController = require('../controllers/userController');

routes.post('/user/:userId', MedicalRecordController.CreateMedicalRecord);   // posso criar prontuarios

routes.put('/user/:userId', MedicalRecordController.EditMedicalRecords);     // posso editar prontuarios

routes.get('/user/:userId', MedicalRecordController.ListMedicalRecords);           //listar prontuários

routes.get('/users/:id', UserController.GetUser);                             // posso ver os usuarios

module.exports = routes;


