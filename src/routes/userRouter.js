const express = require('express');
const userController = require('../controllers/userController');
 const authMiddleware = require('../middlewares/authMiddleware');

const authRoute = express.Router();

authRoute.get('/user', authMiddleware, userController.getAllUsers);
authRoute.post('/user', userController.createNewUser);

module.exports = authRoute;