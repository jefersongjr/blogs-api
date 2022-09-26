const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authentication = async ({ email, password }) => {
  if (!email || !password) {
    const status = 400;
    const message = 'Some required fields are missing';
    const x = { status, message };
    throw x;
  }

  const result = await User.findOne({
        attributes: ['id', 'email', 'display_name'],
        where: { email, password },
    });

    if (!result) {
      const status = 400;
      const message = 'Invalid fields';
      const x = { status, message };
       throw x;
     }
     
    const token = generateToken(result.dataValues);

    return token;
};

module.exports = { 
  authentication,
};