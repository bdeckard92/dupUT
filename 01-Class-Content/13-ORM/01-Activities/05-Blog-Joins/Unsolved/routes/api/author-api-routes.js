const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
  db.Author.findAll({
    // update query to "include" associated Posts
  }).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

router.get('/:id', (req, res) => {
  // update query to "include" associated Posts
  db.Author.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

router.post('/', (req, res) => {
  db.Author.create(req.body).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

router.delete('/:id', (req, res) => {
  db.Author.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

module.exports = router;
