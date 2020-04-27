const router = require('express').Router();
const Post = require('../models/post');

// Routes
// =============================================================

// GET route for getting all of the posts
router.get('/api/posts/', (req, res) => {
  Post.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

// GET route for retrieving posts of a specific category
router.get('/api/posts/category/:category', (req, res) => {
  // Your code here
});

// GET route for retrieving a single post
// We can get the id of the post from 'req.params.id'
router.get('/api/posts/:id', (req, res) => {
  // Your code here
});

// POST route for saving a new post
// We can create a post with the data in 'req.body'
router.post('/api/posts', (req, res) => {
  // Your code here
});

// DELETE route for deleting a post
// We can get the id of the post from 'req.params.id'
router.delete('/api/posts/:id', (req, res) => {
  // Your code here
});

// PUT route for updating a post
// We can update a post with the data in 'req.body'
router.put('/api/posts/:id', (req, res) => {
  // Your code here
});

module.exports = router;
