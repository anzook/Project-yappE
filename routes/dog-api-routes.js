/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passpor');

module.exports = function(app) {
  app.get('/api/dogs/:id', function(req, res) {
    db.Pet.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    }).catch();
  });
  app.post('api/add-pet', function(req, res) {
    db.Pet.create({
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      breed: req.body.breed,
    })
        .then(function(dbDog) {
          res.json(dbDog);
        })
        .catch(function(err) {
          res.status(401).json(err);
        });
  });
};
