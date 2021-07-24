const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/userController');

routes.post('/user/records', UserController.apiCreateUser);




module.exports = routes;