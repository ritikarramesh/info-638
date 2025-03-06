const express = require('express'); //assignment 2 addition: implement a genres router
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
  console.log('body: ' + JSON.stringify(req.body))
  Genre.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `The genre has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/genres')
});

router.get('/edit', async (req, res, next) => {
  let genreIndex = req.query.id;
  let genre = Genre.get(genreIndex);
  res.render('genres/form', { title: 'BookedIn || Genres', genre: genre, genreIndex: genreIndex, authors: Author.all, genres: Genre.all }); //this will render books, author, and genre
});

router.get('/show/:id', async (req, res, next) => {
  let genre = Genre.get(req.params.id); //this will get the genre by ID from the URL parameter
  
  let booksInGenre = Book.all.map((book, index) => ({...book, index})) //this will add original index to each book (the index in view -- 'handlebars')
    .filter(book => book.genreId && book.genreId.includes(parseInt(req.params.id))); //this will find the books that have this genre ID
  
  let templateVars = {
    title: 'BookedIn || Genres',
    genre: genre,
    books: booksInGenre //this will filter books by this genre
  };
  
  res.render('genres/show', templateVars); // this will render the genre show page with genre and its books
});

module.exports = router;