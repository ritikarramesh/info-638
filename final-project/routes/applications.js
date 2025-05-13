const express = require('express');
const router = express.Router();
const helpers = require('./helpers')

const Application = require('../models/application');
const Dog = require('../models/dog');
const Shelter = require('../models/shelter');


router.get('/', async (req, res, next) => {
    if (helpers.isNotLoggedIn(req, res)) {
        return
      }
    const applications = await Application.all(req.session.currentUser.id)
    const dogs = await Dog.all()
    for (const dog of dogs) {
        dog.shelter = await Shelter.get(dog.shelterId)
    }
    res.render('applications/index', { title: 'BarkedIn || Applications', applications: applications, dogs: dogs });
  });
  
  router.get('/form', async (req, res, next) => {
    if (helpers.isNotLoggedIn(req, res)) {
        return
      }
    const dog = await Dog.get(req.query.dogId)
    dog.shelter = await Shelter.get(dog.shelterId)
    res.render('applications/form', { title: 'BarkedIn || Applications', dog: dog });
  });
  
  router.get('/show/:id', async (req, res, next) => {
    if (helpers.isNotLoggedIn(req, res)) {
        return
      }
    const application = await Application.get(req.params.id)
    const dog = await Dog.get(application.dogId)
    dog.shelter = await Shelter.get(dog.shelterId)
    let templateVars = {
      title: 'BarkedIn || Application',
      application: application,
      dog: dog
    }
    res.render('applications/show', templateVars);
  });

  router.post('/insert', async (req, res, next) => {
    console.log('body: ' + JSON.stringify(req.body))
    req.body.userId = req.session.currentUser.id
    req.body.submissionDate = new Date()
    req.body.status = 'submitted'
    
    await Application.add(req.body);
    
    req.session.flash = {
      type: 'info',
      intro: 'Success!',
      message: `the application has been submitted!`,
    };
    res.redirect(303, '/applications')
  });
  
  module.exports = router;
