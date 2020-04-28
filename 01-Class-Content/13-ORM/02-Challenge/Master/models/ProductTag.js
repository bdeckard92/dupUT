const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class ProductTag extends Model {}

ProductTag.init({}, { sequelize });

module.exports = ProductTag;
