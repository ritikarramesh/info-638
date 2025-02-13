const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = [
    "book name 1", "book name 2", "book name 3"
  ]
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

module.exports = router;

