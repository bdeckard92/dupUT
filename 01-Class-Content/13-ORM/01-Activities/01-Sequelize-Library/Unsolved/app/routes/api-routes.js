// Dependencies
// =============================================================
const router = require('express').Router();
const { Op } = require('sequelize');
const Book = require('../models/book.js');

// Routes
// =============================================================

// Get all books
router.get('/books', (req, res) => {});

// Get all books of a specific genre
router.get('/genres/:genre', (req, res) => {});

// Get all books from a specific author
router.get('/authors/:author', (req, res) => {});

// Get all "long" books (books 150 pages or more)
router.get('/books/length/long', (req, res) => {});

// Get all "short" books (books 150 pages or less)
router.get('/books/length/short', (req, res) => {});

module.exports = router;
