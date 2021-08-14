const database = require('../database/database.json');
const MedicalRecord = require('../model/MedicalRecord');

module.exports = class MedicalRecordRepository{
  static CreateMedicalRecord( userId, data ){
    const idRecord = database.users[userId].medicalRecords.length;
    
    const Record = new MedicalRecord(idRecord, data);
    database.users[userId].medicalRecords.push(Record)

    return Record;
  }

  static GetAllMedicalRecords( userId ){
    return database.users[userId].medicalRecords;
  }

  static EditMedicalRecord( userId, record ){
    database.users[userId].medicalRecords[record.id] = record;
    return database.users[userId].medicalRecords[record.id];
  }

}