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

module.exports = {
    getAll,
    createUser,
};

/* O endpoint deve ser acessível através do URL /user;
O endpoint deve ser capaz de adicionar um novo user a sua tabela no banco de dados;
O corpo da requisição deverá seguir o formato abaixo:
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  // a imagem não é obrigatória
} */