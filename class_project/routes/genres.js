const express = require('express');
const router = express.Router();

const Genre = require('../models/genre');
const Book = require('../models/book');
const Author = require('../models/author');

router.get('/', function(req, res, next) {
  const genres = Genre.all;
  res.render('genres/index', { title: 'BookedIn || Genres', genres: genres });
});

router.get('/form', async (req, res, next) => {
  res.render('genres/form', { title: 'BookedIn || Genres' });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body));
  Genre.upsert(req.body);
  res.redirect(303, '/genres');
});

router.get('/edit', async (req, res, next) => {
  let genreIndex = req.query.id;
  let genre = Genre.get(genreIndex);
  res.render('genres/form', { title: 'BookedIn || Genres', genre: genre, genreIndex: genreIndex, authors: Author.all, genres: Genre.all });
});

router.get('/show/:id', async (req, res, next) => {
  let genre = Genre.get(req.params.id);
  
  let booksInGenre = Book.all.map((book, index) => ({...book, index}))
    .filter(book => book.genreId && book.genreId.includes(parseInt(req.params.id)));
  
  let templateVars = {
    title: 'BookedIn || Genres',
    genre: genre,
    books: booksInGenre
  };
  
  res.render('genres/show', templateVars);
});

module.exports = router;