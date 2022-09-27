const categoryService = require('../services/categoryService');

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.getCategory();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);  
  }
};

const createNewCategory = async (req, res, next) => {
    try {
      const { name } = req.body;
      const category = await categoryService.createCategory(name);
      return res.status(201).json(category);
    } catch (error) {
      next(error);  
    }
};

module.exports = {
    createNewCategory,
    getAllCategories,
};