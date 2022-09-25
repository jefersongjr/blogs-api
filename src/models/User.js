const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  return User;
};

module.exports = UserModel