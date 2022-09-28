const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const authRoute = express.Router();

authRoute.post('/post', authMiddleware, postController.createNewPost);

module.exports = authRoute;