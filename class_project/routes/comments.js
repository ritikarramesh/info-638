const express = require('express');
 const router = express.Router();
 const Comment = require('../models/comment');

 function notAuthorized(req, res, returnUrl) {
   req.session.flash = {
     type: 'danger',
     intro: 'Error!',
     message: `You are not authorized to edit this comment!`,
   };
   res.redirect(303, returnUrl);
   return;
 }

 router.get('/edit', async (req, res, next) => {
   let commentId = req.query.id;
   let comment = Comment.get(commentId);
   if (! comment) {
     return notAuthorized(req, res, `/books/show/${comment.bookId}`);
   }
   if (! req.session.currentUser){
     return notAuthorized(req, res, `/`);
   }
   if (req.session.currentUser.email != comment.userEmail){
     return notAuthorized(req, res, `/books/show/${comment.bookId}`);
   }
   res.render('comments/form', { title: 'BookedIn || Genres', comment: comment });
 });

 router.post('/upsert', async (req, res, next) => {
   console.log('body: ' + JSON.stringify(req.body));
   if (req.session.currentUser.email != req.body.userEmail){
     return notAuthorized(req, res, `/books/show/${req.body.bookId}`);
   }
   Comment.upsert(req.body);
   req.session.flash = {
     type: 'info',
     intro: 'Success!',
     message: `Your comment has been updated!`,
   };
   res.redirect(303, `/books/show/${req.body.bookId}`);
 });


 module.exports = router;