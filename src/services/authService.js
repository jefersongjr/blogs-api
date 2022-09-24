const { UserModel } = require('../models/User');
const generateToken = require('../utils/JWT');

const authentication = async ({ email, password }) => {
  const result = await UserModel.findOne({
        attributes: ['id', 'email', 'display_name'],
        where: { email, password },
    });

    if (!result) {
      const erro = new Error('usuario ou senha invalida');
      throw erro;
    }

    const token = generateToken({
        id: result.dataValues.id,
        email: result.dataValues.email,
        displayName: result.dataValues.display_name,
    });

    return token;
};

module.exports = { 
  authentication,
};