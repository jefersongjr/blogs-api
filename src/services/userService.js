const { User } = require('../models');

const getAll = async () => {
   const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
});
   console.log(users);
   return users;
};

module.exports = {
    getAll,
};