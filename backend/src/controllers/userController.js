const UserService = require('../services/user.service');
const database = require('../database/database.json');

module.exports = class User{
    static async apiCreateUser(request, response){
        try{
            const newUser = await UserService.createUser(request.body);
            database.users.push(newUser)
            response.json(newUser);
        } catch(err){
            response.status(500).json({err: err})
        }
    }
}