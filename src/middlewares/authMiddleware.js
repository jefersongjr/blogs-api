const JWTUtils = require('../utils/JWT');

const authMiddleware = async (req, _res, next) => {
    const token = req.headers.authorization;
    try {
        const user = await JWTUtils.authTokenValidation(token);    
        req.locals = user;
        
        if (!user) {
            const status = 401;
            const message = 'Token Not found';
            const erroMessage = { status, message };
            throw erroMessage;
        }
    } catch (error) {  
        next(error);
    }
    next();
};

module.exports = authMiddleware;