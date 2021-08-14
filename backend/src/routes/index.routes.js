const express = require('express');
const routes = express.Router();
const userRoutes = require('./user.routes');
const admRoutes = require('./adm.routes');

routes.use('/user', userRoutes);
routes.use('/adm', admRoutes);

module.exports = routes;
