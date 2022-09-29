const { BlogPost, Category, PostCategory, User } = require('../models');
const { throwError } = require('../utils/throwError');
const { getCategory } = require('./categoryService');

const verifyCategory = async (categoryId) => {
    const allCategories = await getCategory();
    const categoriesId = allCategories.map((category) => category.id);
    const categoryValidate = categoryId.every((i) => categoriesId.includes(i));
    if (categoryValidate === false) {
      const status = 400;
      const message = '"categoryIds" not found';
      const erroMessage = { status, message };
      throw erroMessage;
    }
};

const createPost = async (title, content, userId) => {
    const result = { title, content, userId };
    if (!title || !content || !userId) {
        const status = 400;
        const message = 'Some required fields are missing';
        const erroMessage = { status, message };
        throw erroMessage;
      }
    const post = BlogPost.create(result);
    return post;
};

const createPostCategory = async (postId, categoryIds) => {
    const categories = await PostCategory.create({ postId, categoryId: categoryIds });
    return categories;
};

const getPosts = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] },
        }, { model: Category, as: 'categories', through: { attributes: [] } }],
  });
   return post;
};

const getById = async (id) => {
  const allPosts = await getPosts();
  const verifyId = allPosts.some((x) => x.id === Number(id));
  console.log(verifyId);
   
  if (!verifyId) throwError(404, 'Post does not exist');

  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] },
        }, { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  return post;
};

  const editPost = async (title, content, id, idLocal) => {
    if (!title || !content) throwError(400, 'Some required fields are missing');
    const post = await BlogPost.update(
      { title, content },
      { where: { id } }, {
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] },
            }, { model: Category, as: 'categories', through: { attributes: [] } }],
      },
    );

    const postId = await getById(id);
      console.log(postId.userId);
    if (idLocal !== postId.userId) throwError(401, 'Unauthorized user');
    return post;
  };

module.exports = { 
     createPost,
     verifyCategory,
     createPostCategory,
     getPosts,
     getById,
     editPost,
};