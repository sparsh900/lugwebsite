const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  rollno: { type: Number, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true },
  phoneno: { type: Number, required: true },
  year: { type: String, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
