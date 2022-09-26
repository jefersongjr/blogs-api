const userService = require('../services/userService');
const { getById } = require('../services/userService');
const authService = require('../services/authService');

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
    const newUser = await userService.createUser(displayName, email, password, image);
    const auth = await authService.authentication(newUser);
    return res.status(201).json({ token: auth }); 
  } catch (error) {
   next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getById(id);
    return res.status(200).json(user); 
  } catch (error) {
   next(error);
  }
};

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
};