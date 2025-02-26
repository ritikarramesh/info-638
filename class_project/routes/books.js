const express = require('express');
const Book = require('../models/books');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books' });
});

router.post('/create', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.add(req.body);
  res.redirect(303, '/books')
});

module.exports = router;

