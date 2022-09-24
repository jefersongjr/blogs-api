const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = ({ id, email, password }) => {
    const payload = {
        id,
        email,
        password,
    };
    
    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    const token = jwt.sign(payload, secret, jwtConfig);
    
    return token;
};

module.exports = {
    generateToken,
};