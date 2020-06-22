const db = require('../models');

module.exports = app => {
  app.get('/api/images', (req, res) => {
    db.Image.find({}).then(dbImages => {
      res.json(dbImages);
    });
  });

  app.put('/api/images/:id', (req, res) => {
    db.Image.updateOne(
      { _id: req.params.id },
      { rating: req.body.rating }
    ).then(dbImage => {
      res.json(dbImage);
    });
  });
};
