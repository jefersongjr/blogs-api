const express = require('express');
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const categoryRoute = express.Router();

categoryRoute.post('/categories', authMiddleware, categoryController.createNewCategory);

module.exports = categoryRoute;