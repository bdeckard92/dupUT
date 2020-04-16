const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Author.findAll({
    include: [db.Post],
  }).then((dbAuthor) => {
    res.json(dbAuthor);
  });
});

router.get('/:id', (req, res) => {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Author.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Post],
  }).then((dbAuthor) => {
    res.json(dbAuthor);
  });
});

router.post('/', (req, res) => {
  db.Author.create(req.body).then((dbAuthor) => {
    res.json(dbAuthor);
  });
});

router.delete('/:id', (req, res) => {
  db.Author.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbAuthor) => {
    res.json(dbAuthor);
  });
});

module.exports = router;
