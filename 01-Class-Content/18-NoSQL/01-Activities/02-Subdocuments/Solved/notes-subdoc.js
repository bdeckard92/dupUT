const { Schema } = require('mongoose');

const notesSchema = new Schema({
  notesText: {
    type: String,
    required: true
  }
});

module.exports = notesSchema;
