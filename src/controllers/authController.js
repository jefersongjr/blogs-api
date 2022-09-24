const authService = require('../services/authService');

const authorization = async (req, res) => {
  const { email, password } = req.body;
   const auth = await authService.authentication({ email, password });
    return res.status(200).json(auth);
};

module.exports = {
    authorization,
};