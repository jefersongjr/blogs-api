const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

const authTokenValidation = async (token) => {
    if (!token) {
        const status = 401;
        const message = 'xxx';
        const x = { status, message };
        throw x;
    }

    try {
        const introspection = await jwt.verify(token, JWT_SECRET);
        return introspection;
    } catch (error) {
        const status = 401;
        const message = 'xxx';
        const x = { status, message };
        throw x;
    }
};
    
module.exports = {
    generateToken,
    authTokenValidation,
};