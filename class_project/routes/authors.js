const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const authors = [
    "James S. A. Corey", "Craig Alanson", "Cixin Liu"
  ]
  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

module.exports = router;

