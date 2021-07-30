const MedicalRecordService = require('../services/medicalRecord.service');
const database = require('../database/database.json');

module.exports = class MedicalRecord{
    static apiCreateMedicalRecord(request, response){
        const userId = request.params.id;
        try{
            const id = database.users[userId].medicalRecords.length;
            const newMedicalRecord = MedicalRecordService.createMedicalRecord(request.body,id);
            database.users[userId].medicalRecords.push(newMedicalRecord);
            response.json(newMedicalRecord);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

    static apiListMedicalRecords(request, response){
        const userId = request.params.id;
        try{
            const listMedicalRecords = database.users[userId].medicalRecords;
            response.json(listMedicalRecords);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

    static apiEditMedicalRecords(request, response){
        const userId = request.params.id;
        try{
            const editedMedicalRecord = MedicalRecordService.editMedicalRecord(request.body);
            database.users[userId].medicalRecords[request.body.id] = editedMedicalRecord;
            response.json(editedMedicalRecord);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

}