// Add code here to create a Post model
// This model needs a title, a body, and a category
// Don't forget to export the post after defining
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'Personal'
    }
  },
  {
    sequelize
  }
);

module.exports = Post;
