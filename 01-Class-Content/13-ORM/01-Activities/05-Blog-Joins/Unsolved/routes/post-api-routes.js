const router = require('express').Router();
const { Post, Author } = require('../models');

// Routes
// =============================================================

// `include` the Author model
router.get('/api/posts/', (req, res) => {
  Post.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

// `include` the Author model
router.get('/api/posts/category/:category', (req, res) => {
  Post.findAll({
    where: {
      category: req.params.category
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// `include` the Author model
router.get('/api/posts/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.post('/api/posts', (req, res) => {
  Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.delete('/api/posts/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.put('/api/posts/:id', (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
