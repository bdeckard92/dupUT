const { Schema, model } = require('mongoose');
const notesSchema = require('./Notes');

const notebookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is Required'
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Notebook = model('Notebook', notebookSchema);

module.exports = Notebook;
