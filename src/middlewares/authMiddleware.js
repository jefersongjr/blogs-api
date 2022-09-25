const JWTUtils = require('../utils/JWT');

const authMiddleware = async (req, _res, next) => {
    const authorization = req.headers;
    
    const user = await JWTUtils.authTokenValidation(authorization);
    if (!user) {
    const x = { status: 401, message: 'jwt malformed' };
    throw x;
}
    req.locals = user;
    next();
};

module.exports = authMiddleware;