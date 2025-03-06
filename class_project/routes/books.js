const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');

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
    message: `the book has been ${createdOrupdated}!`,
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
    book: Book.get(req.params.id)
  }
  
  if (templateVars.book.authorIds) {
    templateVars['authors'] = templateVars.book.authorIds.map((authorId) => Author.get(authorId))
  }
  
  if (templateVars.book.genreId && templateVars.book.genreId.length > 0) {  //this checks if a book has any genres assigned
    let genreId = templateVars.book.genreId[0];  //this gets the first genre ID from the array
    let genre = Genre.get(genreId);  //this will retrieve the genre object using that ID
    genre.id = genreId;  //this adds the ID to the genre object 
    templateVars['genre'] = genre;  //this will add genre to template variables
  }

  res.render('books/show', templateVars);
});

router.get('/genres/:id', async (req, res, next) => {
  let genre = Genre.get(req.params.id);  //this will get the genre by ID
  let booksInGenre = Book.all.filter(book => book.genreId == req.params.id);  //this is to find books in this genre
  res.render('books/show', { title: 'BookedIn || Books', genre: genre, books: booksInGenre });  //this will render with genre and filtered books
});

module.exports = router;