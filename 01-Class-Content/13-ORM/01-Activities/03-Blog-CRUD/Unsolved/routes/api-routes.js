const router = require('express').Router();
const Post = require('../models/post');

// Routes
// =============================================================
// GET route for getting all of the posts
router.get('/api/posts/', (req, res) => {});

// Get route for returning posts of a specific category
router.get('/api/posts/category/:category', (req, res) => {});

// Get route for retrieving a single post
router.get('/api/posts/:id', (req, res) => {});

// POST route for saving a new post
router.post('/api/posts', (req, res) => {
  console.log(req.body);
});

// DELETE route for deleting posts
router.delete('/api/posts/:id', (req, res) => {});

// PUT route for updating posts
router.put('/api/posts/:id', (req, res) => {});

module.exports = router;
