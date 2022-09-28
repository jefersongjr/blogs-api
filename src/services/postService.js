const { BlogPost, PostCategory } = require('../models');
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

module.exports = { 
     createPost,
     verifyCategory,
     createPostCategory,
};