const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const UserService = require('../../../src/services/user.service')

let user;

Given('I am at the register page', function () {

});

Given('I insert all the user data', user = function () {
  return{
    "name": "zézinho",
    "age": 15,
    "phone": "131231232",
    "email": "asdasda@hotmail.com",
    "password": "123"
  }
});

When('I submit the data', function () {
  const result = UserService.createUser(user)
});

When('I successfully register an user', function () {

})

Then('I should see a success messsage', function () {

});
