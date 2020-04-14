const router = require('express').Router();
const Todo = require('../models/todo');

// Routes
// =============================================================

// GET route for getting all of the todos
router.get('/api/todos', (req, res) => {
  Todo.findAll({}).then(dbTodo => {
    res.json(dbTodo);
  });
});

// POST route for saving a new todo. We can create todo with the data in 'req.body'
router.post('/api/todos', (req, res) => {
  Todo.create({
    text: req.body.text,
    complete: req.body.complete
  }).then(dbTodo => {
    res.json(dbTodo);
  });
});

// DELETE route for deleting a todo. We can get the id of the todo to be deleted from 'req.params.id'
router.delete('/api/todos/:id', (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTodo => {
    res.json(dbTodo);
  });
});

// PUT route for updating a todo. We can update todo with the data in req.body
router.put('/api/todos/:id', (req, res) => {
  Todo.update(
    {
      text: req.body.text,
      complete: req.body.complete
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbTodo => {
    res.json(dbTodo);
  });
});

module.exports = router;
