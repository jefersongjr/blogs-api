const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const generateToken = ({ id, displayName, email }) => {
    const payload = { 
        id,
        displayName,
        email,
    };

    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    return token;
};

const authTokenValidation = async (token) => {
    if (!token) {
        const status = 401;
        const message = 'Token not found';
        const erroMessage = { status, message };
        throw erroMessage;
    }
    try {
        const introspection = jwt.verify(token, JWT_SECRET);
        return introspection;
    } catch (error) {
        const status = 401;
        const message = 'Expired or invalid token';
        const erroMessage = { status, message };
        throw erroMessage;
    }
};
    
module.exports = {
    generateToken,
    authTokenValidation,
};