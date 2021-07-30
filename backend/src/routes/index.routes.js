const express = require('express');
const routes = express.Router();
const userRouter = require('./user.routes');
const medicalRecordsRouter = require('./medicalRecord.routes');

routes.use('/user', userRouter);
routes.use('/user/record', medicalRecordsRouter);

module.exports = routes;
