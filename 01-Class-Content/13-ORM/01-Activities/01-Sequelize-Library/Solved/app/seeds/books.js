const { Book } = require('../models/book.js');
const sequelize = require('../config/connection');

const bookdata = [
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    genre: 'Crime Fiction',
    pages: 430
  }
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;
