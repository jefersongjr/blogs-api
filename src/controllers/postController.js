const postService = require('../services/postService');

const createNewPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.locals.id;
    const post = await postService.createPost(title, content, userId);
    await postService.verifyCategory(categoryIds);
    categoryIds.forEach((id) => postService.createPostCategory(post.dataValues.id, id)); // postService.createPostCategory(post.dataValues.id, id));
    return res.status(201).send(post);
  } catch (error) {
    next(error);
  }   
};

const getAllPost = async (req, res, _next) => {
  const posts = await postService.getPosts();
  return res.status(200).send(posts);
};

const getPostById = async (req, res, next) => {
 try {
  const { id } = req.params;
  const posts = await postService.getById(id);
  return res.status(200).send(posts);
 } catch (error) {
   next(error);
 } 
};

module.exports = {
    createNewPost,
    getAllPost,
    getPostById,
};

// preciso fazer uma service pra postar os ids em Post Category
// o category id vem na requisição