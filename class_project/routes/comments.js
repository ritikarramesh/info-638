const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Create a new comment
router.post('/upsert', async (req, res, next) => {
  if (!req.session.currentUser) {
    req.session.flash = {
      type: 'error',
      intro: 'Error!',
      message: 'You must be logged in to comment!'
    };
    return res.redirect(303, `/books/show/${req.body.bookId}`);
  }

  const comment = {
    bookId: req.body.bookId,
    userEmail: req.session.currentUser.email,
    text: req.body.text
  };

  if (req.body.id) {
    comment.id = req.body.id;
    Comment.update(comment);
  } else {
    Comment.add(comment);
  }

  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: req.body.id ? 'Comment updated!' : 'Comment added!'
  };
  res.redirect(303, `/books/show/${req.body.bookId}`);
});

// Show edit form
router.get('/edit', async (req, res, next) => {
  const comment = Comment.get(req.query.id);
  
  if (!comment || comment.userEmail !== req.session.currentUser?.email) {
    req.session.flash = {
      type: 'error',
      intro: 'Error!',
      message: 'You can only edit your own comments!'
    };
    return res.redirect(303, `/books/show/${comment?.bookId || req.query.bookId}`);
  }

  res.render('comments/form', { 
    title: 'BookedIn || Edit Comment',
    comment: comment,
    bookId: comment.bookId
  });
});

module.exports = router; 