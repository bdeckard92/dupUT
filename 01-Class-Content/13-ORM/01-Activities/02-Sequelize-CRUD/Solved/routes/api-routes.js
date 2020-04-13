const router = require('express').Router();
// Requiring our Todo model
const Todo = require('../models/todo');

// Routes
// =============================================================
// GET route for getting all of the todos
router.get('/api/todos', (req, res) => {
  // findAll returns all entries for a table when used with no options
  Todo.findAll({}).then(dbTodo => {
    // We have access to the todos as an argument inside of the callback function
    res.json(dbTodo);
  });
});

// POST route for saving a new todo
router.post('/api/todos', (req, res) => {
  console.log(req.body);
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  Todo.create({
    text: req.body.text,
    complete: req.body.complete
  }).then(dbTodo => {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbTodo);
  });
});

// DELETE route for deleting todos. We can get the id of the todo we want to delete from
// req.params.id
router.delete('/api/todos/:id', (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTodo => {
    res.json(dbTodo);
  });
});

// PUT route for updating todos. We can get the updated todo from req.body
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
