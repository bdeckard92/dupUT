const router = require('express').Router();
const { Post, Author } = require('../models');

// Routes
// =============================================================

// `include` the Post model
router.get('/api/authors/', (req, res) => {
  Author.findAll({}).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});

// `include` the Post model
router.get('/api/authors/:id', (req, res) => {
  Author.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});

router.post('/api/authors', function(req, res) {
  Author.create(req.body).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});

router.delete('/api/authors/:id', function(req, res) {
  Author.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});

module.exports = router;
