const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);
    
module.exports = generateToken;