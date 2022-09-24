const express = require('express');
const userController = require('../controllers/userController');

const authRoute = express.Router();

authRoute.get('/user', userController.getAllUsers);

module.exports = authRoute;