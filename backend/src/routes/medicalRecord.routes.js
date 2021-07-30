const express = require('express');
const routes = express.Router();
const MedicalRecordController = require('../controllers/medicalRecordController');

routes.post('/:id', MedicalRecordController.apiCreateMedicalRecord);

routes.get('/:id', MedicalRecordController.apiListMedicalRecords);
routes.put('/:id', MedicalRecordController.apiEditMedicalRecords);


module.exports = routes;