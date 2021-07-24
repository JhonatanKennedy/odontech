module.exports = class UserService{
    static async createUser(data){
        const newAge = parseInt(data.age);
        const newUSer = {
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