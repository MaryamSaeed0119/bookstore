const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publicationYear: Number,
  genre: String,
  // Add other fields as needed
});

const Book = mongoose.model('Book', bookSchema, 'books');

module.exports = Book;
