const UserRepository = require('../repository/UserRepository');

module.exports = class UserService{
    static createUser( data ){
       const newUser = UserRepository.CreateUser( data );
       return newUser;
    }

    static getUser( userID ){
        if(isNaN(userID)){
            const users = UserRepository.GetAllUsers();
            return users;
        }else{
            const user = UserRepository.GetUser( userID );
            return user;
        }
    }

    static editUser( userID, data ){
        const editUser = UserRepository.EditUser( userID, data );
        return editUser;
    }
}