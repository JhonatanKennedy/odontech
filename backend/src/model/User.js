module.exports = class User{
  constructor( id, { name, age, phone, email, password }){
    this.id = id,
    this.name = name,
    this.age = age,
    this.phone = phone,
    this.email = email,
    this.password = password,
    this.medicalRecords = []
  }
}