const { User } = require('../models');

console.log(User);

const getAll = async () => {
    console.log(User);
   const x = await User.findAll();
   return x;
};

module.exports = {
    getAll,
};