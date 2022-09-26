const express = require('express');
const userController = require('../controllers/userController');
const { getUserById } = require('../controllers/userController');
 const authMiddleware = require('../middlewares/authMiddleware');

const authRoute = express.Router();

authRoute.get('/user', authMiddleware, userController.getAllUsers);
authRoute.get('/user/:id', authMiddleware, getUserById);
authRoute.post('/user', userController.createNewUser);

module.exports = authRoute;