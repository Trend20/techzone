const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  iSBN: String,
  author: String,
  title: String,
  publisher: String,
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
