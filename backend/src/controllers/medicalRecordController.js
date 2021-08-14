const MedicalRecordService = require('../services/medicalRecord.service');

module.exports = class MedicalRecord{
    static CreateMedicalRecord(request, response){
        const {userId} = request.params;
        try{
            const Record = MedicalRecordService.createMedicalRecord( userId, request.body );
            response.json(Record);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

    static ListMedicalRecords(request, response){
        const {userId} = request.params;
        try{
            const Records = MedicalRecordService.getAllMedicalRecord( userId );
            response.json(Records);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

    static EditMedicalRecords(request, response){
        const {userId} = request.params;
        const data = request.body;
        try{
            const NewRecord = MedicalRecordService.editMedicalRecord( userId, data );
            response.json(NewRecord);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

}