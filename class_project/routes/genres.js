const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');

router.get('/', async (req, res, next) => {
  const genres = await Genre.all();
  res.render('genres/index', { title: 'BookedIn || Genres', genres: genres });
});

router.get('/form', async (req, res, next) => {
  res.render('genres/form', { title: 'BookedIn || Genres' });
});

router.get('/edit', async (req, res, next) => {
  let genre = await Genre.get(req.query.id);
  res.render('genres/form', { title: 'BookedIn || Genres', genre: genre });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body));
  await Genre.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the genre has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/genres');
});


module.exports = router;