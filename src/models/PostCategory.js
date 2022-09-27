const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
         type: DataTypes.INTEGER,
         foreignKey: true,
         field: "post_id"
         },
        categoryId: { 
          type: DataTypes.INTEGER,
          foreignKey: true,
          field: "category_id"
          }
      }, {
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false
      });
      PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'BlogPosts',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId', // se refere a outra chave de `users_books` 
        });
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId',  // se refere ao id de User na tabela de `users_books`
          otherKey: 'categoryId',
        });
      }
    return PostCategory;
  };
  
  module.exports = PostCategoryModel;