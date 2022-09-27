const categoryService = require('../services/categoryService');

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
};