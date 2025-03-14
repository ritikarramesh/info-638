const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookUser = require('../models/book_user');


router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books', authors: Author.all, genres: Genre.all});
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `The book has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/books')
});

router.get('/edit', async (req, res, next) => {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', { title: 'BookedIn || Books', book: book, bookIndex: bookIndex, authors: Author.all, genres: Genre.all }); //this will render with books, author, and genre
});

router.get('/show/:id', async (req, res, next) => {
  let templateVars = {
    title: 'BookedIn || Books',
    book: Book.get(req.params.id),
    bookId: req.params.id,
    statuses: BookUser.statuses
  }
  if (templateVars.book.authorIds) {
    templateVars['authors'] = templateVars.book.authorIds.map((authorId) => Author.get(authorId));
  }
  if (templateVars.book.genreId) {
    templateVars['genre'] = Genre.get(templateVars.book.genreId);
  }
  if (req.session.currentUser) {
    templateVars['bookUser'] = BookUser.get(req.params.id, req.session.currentUser.email);
  }
  res.render('books/show', templateVars);
});


router.get('/genres/:id', async (req, res, next) => {
  let genre = Genre.get(req.params.id);  //this will get the genre by ID
  let booksInGenre = Book.all.filter(book => book.genreId == req.params.id);  //this is to find books in this genre
  res.render('books/show', { title: 'BookedIn || Books', genre: genre, books: booksInGenre });  //this will render with genre and filtered books
});

module.exports = router;