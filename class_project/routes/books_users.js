const express = require('express');
const router = express.Router();
const BookUser = require('../models/book_user');

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body));
  BookUser.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the status has been ${createdOrupdated}!`,
  };
  res.redirect(303, `/books/show/${req.body.bookId}`);
});


module.exports = router;