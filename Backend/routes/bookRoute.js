const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

// Route to get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error getting books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add a new book
router.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
