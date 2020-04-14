const router = require('express').Router();
const Todo = require('../models/todo');

// Routes
// =============================================================

// GET route for getting all of the todos
router.get('/api/todos', (req, res) => {
  // Write code here to retrieve all of the todos from the database and then `res.json` them back to the user
});

// POST route for saving a new todo. We can create todo with the data in 'req.body'
router.post('/api/todos', (req, res) => {
  // Write code here to create a new todo and then `res.json` back the new todo to the user
});

// DELETE route for deleting a todo. We can get the id of the todo to be deleted from 'req.params.id'
router.delete('/api/todos/:id', (req, res) => {
  // Write code here to delete a todo and then `res.json` back the result back to the user
});

// PUT route for updating a todo. We can update todo with the data in req.body
router.put('/api/todos/:id', (req, res) => {
  // Write code here to update a todo and then `res.json` back the result back to the user
});
