const database = require('../database/database.json');
const User = require('../model/User');

module.exports = class UserRepository{
  static CreateUser( data ){
    const userId = database.users.length;
    const newUser = new User( userId, data );
    database.users.push(newUser);
    return newUser;
  }

  static EditUser( userID, data ){
    const editedUser = database.users[userID];
    editedUser.name = data.name;
    editedUser.password = data.password;
    editedUser.phone = data.phone;
    editedUser.email = data.email;
    database.users[userID] = editedUser;
    return database.users[userID];
  }

  static GetUser( userID ){
    return database.users[userID];
  }
  static GetAllUsers(){
    return database.users; 
  }

}