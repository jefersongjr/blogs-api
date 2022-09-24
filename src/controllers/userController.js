const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const users = await userService.getAll();
    console.log(users);
    return res.status(201).json(users);
};

module.exports = {
    getAllUsers,
};