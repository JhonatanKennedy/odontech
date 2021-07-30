module.exports = class UserService{
    static createUser(data,id){
        const newAge = parseInt(data.age);
        const newUSer = {
            id: id,
            name: data.name,
            age: newAge,
            phone: data.phone,
            email: data.email,
            password: data.password,
            medicalRecords: []
        }
        return newUSer;
    }
}