module.exports = class MedicalRecord{
  constructor( id, { name ,birth ,cel ,alergies ,tooths ,comments } ){
    this.id = id,
    this.name = name,
    this.birth = birth,
    this.cel = cel,
    this.alergies = alergies,
    this.tooths = tooths,
    this.comments = comments,
    this.date = new Date()
  }
}