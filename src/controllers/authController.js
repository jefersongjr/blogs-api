const authService = require('../services/authService');

const authorization = async (req, res, next) => {
  try {
   const auth = await authService.authentication(req.body);
   return res.status(200).send({ token: auth });
  } catch (error) {
    next(error);
  }   
};

module.exports = {
    authorization,
};