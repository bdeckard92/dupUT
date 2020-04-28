const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config.js');

class Category extends Model {};

Category.init({
  category_name: { 
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
});

module.exports = Category;