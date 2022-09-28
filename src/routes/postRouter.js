const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const postRoute = express.Router();

postRoute.post('/post', authMiddleware, postController.createNewPost);
postRoute.get('/post', authMiddleware, postController.getAllPost);

module.exports = postRoute;