// Dependencies
// =============================================================
const router = require('express').Router();
const { Op } = require('sequelize');
const Book = require('../models/book.js');

// Routes
// =============================================================

// Get all books
router.get('/books', (req, res) => {
  Book.findAll({}).then(results => {
    res.json(results);
  });
});

// Get a specific book
router.get('/books/:book', (req, res) => {
  Book.findAll({
    where: {
      title: req.params.book
    }
  }).then(results => {
    res.json(results);
  });
});

// Get all books of a specific genre
router.get('/genres/:genre', (req, res) => {
  Book.findAll({
    where: {
      genre: req.params.genre
    }
  }).then(results => {
    res.json(results);
  });
});

// Get all books from a specific author
router.get('/authors/:author', (req, res) => {
  Book.findAll({
    where: {
      author: req.params.author
    }
  }).then(results => {
    res.json(results);
  });
});

// Get all "long" books (books 150 pages or more)
router.get('/books/length/long', (req, res) => {
  Book.findAll({
    where: {
      pages: {
        [Op.gte]: 150
      }
    }
    // order: [['pages', 'DESC']]
  }).then(results => {
    res.json(results);
  });
});

// Get all "short" books (books 150 pages or less)
router.get('/books/length/short', (req, res) => {
  Book.findAll({
    where: {
      pages: {
        [Op.lte]: 150
      }
    },
    order: [['pages', 'ASC']]
  }).then(results => {
    res.json(results);
  });
});

// Add a book
router.post('/books', (req, res) => {
  console.log('Book Data:');
  console.log(req.body);
  Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    pages: req.body.pages
  }).then(results => {
    res.json(results);
  });
});

// Delete a book
router.delete('/books/:id', (req, res) => {
  console.log('Book ID:');
  console.log(req.params.id);
  Book.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.end();
  });
});

module.exports = router;
