const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
   try {
     const users = await userService.getAll();
     console.log(users);
     return res.status(201).json(users); 
   } catch (error) {
    next(error);
   }
};

module.exports = {
    getAllUsers,
};