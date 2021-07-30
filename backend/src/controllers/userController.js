const UserService = require('../services/user.service');
const database = require('../database/database.json')

module.exports = class User{
    static async apiCreateUser(request, response){
        try{
            const id = await database.users.length;
            const newUser = UserService.createUser(request.body, id);
            await database.users.push(newUser);
            response.json(newUser);
        }catch(error){
            response.status(500).json({error: error})
        }
    }
}