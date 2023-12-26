const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publicationYear: Number,
  genre: String,
  price: Number,
  qty: Number,
});

const Book = mongoose.model('Book', bookSchema, 'books');

module.exports = Book;
