const express = require('express');
const router = express.Router();

const helpers = require('./helpers')

const User = require('../models/user');
const Book = require('../models/book');
const BookUser = require('../models/book_user');


router.get('/register', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  res.render('users/register', { title: 'BookedIn || User registration' });
});

router.post('/register', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  console.log('body: ' + JSON.stringify(req.body))
  let result = User.register(req.body);
  if (result) {
    req.session.flash = {
      type: 'info',
      intro: 'Success!',
      message: `the user ${req.body.name} has been created!`,
    };
    res.redirect(303, '/')
  } else {
    res.render('users/register', {
      title: 'BookedIn || User registration',
      flash: {
        type: 'danger',
        intro: 'Error!',
        message: `This user already exists`}
    });
  }
});

router.get('/login', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  res.render('users/login', { title: 'BookedIn || User login' });
});

router.post('/login', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  console.log('body: ' + JSON.stringify(req.body))
  let user = User.login(req.body);
  if(user) {
    req.session.currentUser = user;
    req.session.flash = {
      type: 'info',
      intro: 'Success!',
      message: `the user ${user.name} has been logged in!`,
    };
    res.redirect(303, '/')
  } else {
    res.render('users/login', {
      title: 'BookedIn || User Login',
      flash: {
        type: 'danger',
        intro: 'Error!',
        message: `Wrong email and password combination or the user could not be found`}
    });

  }
});

router.post('/logout', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  let user = req.session.currentUser
  delete req.session.currentUser

  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the user ${user.name} has been logged out!`,
  };
  res.redirect(303, '/')
});

router.get('/profile', async (req, res, next) => {
  if (helpers.ForceLoggedInUser(req, res)) {
    return
  }
  const booksUser = BookUser.allForUser(req.session.currentUser.email);
  booksUser.forEach((bookUser) => {
    bookUser.book = Book.get(bookUser.bookId)
  })
  res.render('users/profile',
    { title: 'BookedIn || Profile',
      user: req.session.currentUser,
      booksUser: booksUser });
});


module.exports = router;

