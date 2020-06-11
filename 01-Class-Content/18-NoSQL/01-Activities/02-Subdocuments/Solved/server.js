const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const Notebook = require('./notebook-model.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notebookdb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.post('/notebook', ({ body }, res) => {
  Notebook.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/notebook', (req, res) => {
  Notebook.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post('/:notebookId', (req, res) => {
  Notebook.findOneAndUpdate(
    { _id: req.params.notebookId },
    { $addToSet: { notes: req.body } },
    { runValidators: true, new: true }
  )
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'No notebook with this id!' });
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
