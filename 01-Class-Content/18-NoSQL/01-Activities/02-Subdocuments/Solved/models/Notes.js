const { Schema, model } = require('mongoose');

const notesSchema = new Schema({
  notesId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },

  notesText: {
    type: String,
    required: true
  }
});

const Notes = model('Notes', notesSchema);

module.exports = Notes;
