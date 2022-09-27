const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published	: DataTypes.DATE,
      updated: DataTypes.DATE,
      userId: { 
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: "user_id"
        }
    }, {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
          { foreignKey: 'userId', as: 'BlogPosts' });
      };
  
    return BlogPost;
  };
  
  module.exports = BlogPostModel;