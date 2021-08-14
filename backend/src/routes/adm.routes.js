const express = require('express');
const routes = express.Router();
const MedicalRecordController = require('../controllers/medicalRecordController');
const UserController = require('../controllers/userController');

routes.post('/users/:userId', MedicalRecordController.CreateMedicalRecord);   // posso criar prontuarios

routes.put('/users/:userId', MedicalRecordController.EditMedicalRecords);     // posso editar prontuarios

routes.get('/users/:id', UserController.GetUser);                             // posso ver os usuarios

module.exports = routes;


