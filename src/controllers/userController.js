const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
   try {
     const users = await userService.getAll();
     return res.status(200).json(users); 
   } catch (error) {
    next(error);
   }
};

module.exports = {
    getAllUsers,
};