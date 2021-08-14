const UserService = require('../services/user.service');

module.exports = class UserController{
    static CreateUser(request, response){
        const data = request.body;
        try{
            const newUser = UserService.createUser(data);
            response.json(newUser);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

    static GetUser(request, response){
        const { id } = request.params;
        try{
            const user = UserService.getUser(id);
            response.json(user);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

    static EditUser(request, response){
        const { id } = request.params;  
        try{
            const editUser = UserService.editUser( id, request.body );
            response.json(editUser);
        }catch(error){
            response.status(500).json({error: error});
        }
    }
}