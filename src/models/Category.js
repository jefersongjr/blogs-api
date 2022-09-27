const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      name: DataTypes.STRING
    }, {
      tableName: 'category',
      underscored: true,
      timestamps: false
    });
  
    return Category;
  };
  
  module.exports = CategoryModel