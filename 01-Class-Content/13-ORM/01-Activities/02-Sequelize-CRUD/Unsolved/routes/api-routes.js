const router = require('express').Router();
// Requiring our Todo model
const Todo = require('../models/todo');

// Routes
// =============================================================

// GET route for getting all of the todos
router.get('/api/todos', (req, res) => {
  // Write code here to retrieve all of the todos from the database and res.json them
  // back to the user
});

// POST route for saving a new todo. We can create todo with the data in req.body
router.post('/api/todos', (req, res) => {
  // Write code here to create a new todo and save it to the database
  // and then res.json back the new todo to the user
});

// DELETE route for deleting todos. We can get the id of the todo to be deleted from
// req.params.id
router.delete('/api/todos/:id', (req, res) => {});

// PUT route for updating todos. We can get the updated todo data from req.body
router.put('/api/todos/:id', (req, res) => {});
