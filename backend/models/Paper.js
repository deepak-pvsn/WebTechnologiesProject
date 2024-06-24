const mongoose = require('mongoose');

const PaperSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  abstract: String,
  classification: String,
  year: Number,
  link: String
});

module.exports = mongoose.model('Paper', PaperSchema);