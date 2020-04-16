const router = require('express').Router();
// Requiring our models
const db = require('../../models');

// Routes
// =============================================================
// GET route for getting all of the posts
router.get('/', (req, res) => {
  const query = {};
  if (req.query.author_id) {
    query.AuthorId = req.query.author_id;
  }
  // update query to "include" associated Author
  db.Post.findAll({
    where: query
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// Get route for retrieving a single post
router.get('/:id', (req, res) => {
  // update query to "include" associated Author
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// POST route for saving a new post
router.post('/', (req, res) => {
  console.log(req.body);
  db.Post.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
});

// DELETE route for deleting posts
router.delete('/:id', (req, res) => {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// PUT route for updating posts
router.put('/', (req, res) => {
  db.Post.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;
