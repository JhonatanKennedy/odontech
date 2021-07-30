module.exports = class MedicalRecordService{
    static createMedicalRecord(data,id){
        const newMedicalRecord = {
            id: id,
            name: data.name,
            birth: data.birth,
            cel: data.cel,
            alergies: data.alergies,
            tooths: data.tooths,
            comments: data.comments
        }
        return newMedicalRecord;
    }

    static editMedicalRecord(data){
        const editedMedicalRecord = {
            id: data.id,
            name: data.name,
            birth: data.birth,
            cel: data.cel,
            alergies: data.alergies,
            tooths: data.tooths,
            comments: data.comments
        }
        return editedMedicalRecord;
    }
}