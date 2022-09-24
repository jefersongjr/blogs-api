const { UserModel } = require('../models/User');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {   
    const user = await UserModel.findOne({
        attributes: ['id', 'email', 'name'],
        where: { email, password },
    });

    const token = generateToken(user.dataValues);

    return token;
};

module.exports = {
    authenticate,
};