const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');


// Route to get a specific book by ID
router.get('/books/:id', async (req, res) => {
    
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error('Error getting book by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


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

// Route to update a book by ID
router.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    console.error('Error updating book by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a book by ID
router.delete('/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(deletedBook);
  } catch (error) {
    console.error('Error deleting book by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to buy a book by ID
router.post('/books/:id/buy', async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { $inc: { qty: -1 } }, // Decrement the quantity by 1
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    if (updatedBook.qty < 0) {
      return res.status(400).json({ error: 'Book out of stock' });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error('Error buying book by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get books by genre
router.get('/books/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const books = await Book.find({ genre });

    if (books.length === 0) {
      return res.status(404).json({ error: `No books found in the genre "${genre}"` });
    }

    res.json(books);
  } catch (error) {
    console.error('Error getting books by genre:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get books by title
router.get('/books/title/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const books = await Book.find({ title });

    if (books.length === 0) {
      return res.status(404).json({ error: `No books found with the title "${title}"` });
    }

    res.json(books);
  } catch (error) {
    console.error('Error getting books by title:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route to get books by author
router.get('/books/author/:author', async (req, res) => {
  try {
    const author = req.params.author;
    const books = await Book.find({ author });

    if (books.length === 0) {
      return res.status(404).json({ error: `No books found by the author "${author}"` });
    }

    res.json(books);
  } catch (error) {
    console.error('Error getting books by author:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
