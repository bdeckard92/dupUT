const { Schema, model } = require('mongoose');
const notesSchema = require('./notes-subdoc');

const notebookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is Required'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  notes: [notesSchema]
});

const Notebook = model('Notebook', notebookSchema);

module.exports = Notebook;
