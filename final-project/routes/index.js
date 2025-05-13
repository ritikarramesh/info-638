const express = require('express');
const router = express.Router();

const Dog = require('../models/dog');
const Shelter = require('../models/shelter');


router.get('/', async function (req, res, next) {
  const dogs = await Dog.all()
  for (const dog of dogs) {
    dog.shelter = await Shelter.get(dog.shelterId)
  }
  const shelters = await Shelter.all()
  res.render('index', { title: 'BarkedIn', dogs: dogs, shelters: shelters });
});

module.exports = router;
