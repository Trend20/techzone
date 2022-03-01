const express = require('express');
const router = express.Router();

const Book = require('../models/book.model');


// GET BOOKS
router.route('/').get((req, res) =>{
  Book.find()
      .then(book => res.json(book))
      .catch(error => res.status(400).json('Error ' + error))
});


// GET BOOK BY ID
router.route('/:id').get((req, res) =>{
  Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(error =>res.status(400).json('Error ' + error))
});


// ADD BOOK TO STORE
router.route('/add').post((req, res) =>{
  const iSBN = req.body.iSBN;
  const author = req.body.author;
  const title = req.body.title;
  const publisher = req.body.publisher;

  const newBook = new Book({iSBN, author, title, publisher});

  newBook.save()
      .then(() => res.json('Book added successfully!!'))
      .catch(error => res.status(400).json('Error ' + error))
});

// DELETE EXERCISE
router.route('/:id').delete((req, res) =>{
  Book.findByIdAndRemove(req.params.id)
      .then(res => res.json('Exercise deleted!!'))
      .catch(error => res.status(400).json('Error ' + error))
});

// UPDATE BOOK
router.route('/update/:id').post((req, res) =>{
  Book.findByIdAndUpdate(req.params.body)
      .then(book =>{
        book.iSBN = req.body.iSBN
        book.author = req.body.author
        book.title = req.body.title
        book.publisher = req.body.publisher

        books.save()
             .then(() =>res.json('Book updated!!'))
             .catch(error => res.status(400).json('Error ' + error))
      })
      .catch(error =>res.status(400).json('Error ' + error))
});

module.exports = router;
