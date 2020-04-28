require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      logging: false
    });

module.exports = sequelize;