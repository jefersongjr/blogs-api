const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      name: DataTypes.STRING
    }, {
      underscored: true,
      timestamps: false
    });
  
    return Category;
  };
  
  module.exports = CategoryModel