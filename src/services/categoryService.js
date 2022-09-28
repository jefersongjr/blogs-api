const { Category } = require('../models');

const getCategory = async () => {
    const categories = await Category.findAll();
    return categories;
};

const createCategory = async (name) => {
    if (!name) {
     console.log(name);
     const status = 400;
     const message = '"name" is required';
     const erroMessage = { status, message };
     throw erroMessage;
    }
    const category = Category.create({ name });
    return category;
};

module.exports = { 
 createCategory,
 getCategory,
};