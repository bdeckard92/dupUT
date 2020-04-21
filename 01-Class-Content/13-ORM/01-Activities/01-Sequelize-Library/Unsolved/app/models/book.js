// Dependencies
// =============================================================

// Requires the sequelize library
const { Model, DataTypes } = require('sequelize');
// Requires the connection to the database (connection.js)
const sequelize = require('../config/connection.js');

// Creates a "Book" model with title, author, genre, and pages properties
class Book extends Model {}

Book.init(
  {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    pages: DataTypes.INTEGER
  },
  {
    sequelize
  }
);

// Exports the book model for other files to use
module.exports = Book;
