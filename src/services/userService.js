const userMiddleware = require('../middlewares/userMiddleware');
const { User } = require('../models');

const getAll = async () => {
   const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
});
   return users;
};

const createUser = async (displayName, email, password, image) => {
    const { error } = userMiddleware.userSchema.validate({ displayName, email, password, image });
     const test = await getAll();
     const validateEmail = test.some((x) => x.email === email);
     if (validateEmail) {
      const status = 409;
      const message = 'User already registered';
      const erroMessage = { status, message };
      throw erroMessage;
     }
      if (error) {
    const [code, message] = error.message.split('|');
    const x = { status: code, message };
      throw x;
  }
    const newUser = await User.create({ displayName, email, password, image });

    return newUser;
};

const getById = async (id) => {
    const user = await User.findByPk(id, {
     attributes: ['id', 'displayName', 'email', 'image'],
    });
    if (!user) {
      const status = 404;
      const message = 'User does not exist';
      const erroMessage = { status, message };
      throw erroMessage;
    }

    return user;
 };
 
module.exports = {
    getAll,
    createUser,
    getById,
};
