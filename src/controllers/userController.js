const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
   try {
     const users = await userService.getAll();
     return res.status(200).json(users); 
   } catch (error) {
    next(error);
   }
};

const createNewUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    console.log(displayName);
    const newUser = await userService.createUser(displayName, email, password, image);
    return res.status(200).json(newUser); 
  } catch (error) {
   next(error);
  }
};

module.exports = {
    getAllUsers,
    createNewUser,
};