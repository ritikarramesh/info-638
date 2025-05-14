const express = require('express');
const router = express.Router();
const helpers = require('./helpers')

const User = require('../models/user');

router.get('/signup', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  res.render('users/signup', { title: 'BarkedIn || Sign Up' });
});

router.post('/signup', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  console.log('body: ' + JSON.stringify(req.body))
  let result = await User.add(req.body);
  if (result) {
    req.session.flash = {
      type: 'info',
      intro: 'Success!',
      message: `The user ${req.body.name} has been created!`,
    };
    res.redirect(303, '/')
  } else {
    res.render('users/signup', {
      title: 'BarkedIn || Sign Up',
      flash: {
        type: 'danger',
        intro: 'Error!',
        message: `This user already exists`
      }
    });
  }
});

router.get('/login', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  res.render('users/login', { title: 'BarkedIn || Log In' });
});

router.post('/login', async (req, res, next) => {
  if (helpers.isLoggedIn(req, res)) {
    return
  }
  console.log('body: ' + JSON.stringify(req.body))
  let user = await User.login(req.body);
  if (user) {
    req.session.currentUser = user;
    req.session.flash = {
      type: 'info',
      intro: 'Success!',
      message: `The user ${user.name} has been logged in!`,
    };
    res.redirect(303, '/applications')
  } else {
    res.render('users/login', {
      title: 'BarkedIn || Log In',
      flash: {
        type: 'danger',
        intro: 'Error!',
        message: `Wrong email and password combination or the user could not be found`
      }
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
    message: `You are now logged out!`,
  };
  res.redirect(303, '/')
});

module.exports = router;