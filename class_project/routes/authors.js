const express = require('express');
const router = express.Router();

const helpers = require('./helpers')

const Author = require('../models/author');

router.get('/', async function(req, res, next) {
  const authors = await Author.all()
  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

router.get('/form', async (req, res, next) => {
  if (helpers.ForceLoggedInUser(req, res)) {
      return
  }
  res.render('authors/form', { title: 'BookedIn || Authors' });
});

router.post('/upsert', async (req, res, next) => {
  if (helpers.ForceLoggedInUser(req, res)) {
    return
  }
  console.log('body: ' + JSON.stringify(req.body))
  await Author.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the author ${req.body.firstName} ${req.body.lastName} has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/authors')
});

router.get('/edit', async (req, res, next) => {
  if (helpers.ForceLoggedInUser(req, res)) {
    return
  }
  let author = await Author.get(req.query.id);
  res.render('authors/form', { title: 'BookedIn || Authors', author: author});
});




module.exports = router;

