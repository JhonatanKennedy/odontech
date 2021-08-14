const MedicalRecordRepository = require('../repository/MedicalRecordRepository');

module.exports = class MedicalRecordService{
    static createMedicalRecord( id, data ){
        const medicalRecord = MedicalRecordRepository.CreateMedicalRecord( id, data );
        return medicalRecord;
    }

    static getAllMedicalRecord( userId ){
        const Records = MedicalRecordRepository.GetAllMedicalRecords( userId );
        return Records;
    }

    static editMedicalRecord( userId, data ){
        const NewRecord = MedicalRecordRepository.EditMedicalRecord( userId, data );
        return NewRecord;
    }
}