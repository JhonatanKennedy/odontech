const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/userController');

routes.post('/', UserController.apiCreateUser);

module.exports = routes;