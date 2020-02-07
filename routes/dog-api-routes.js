/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');
// const passport = require('../config/passport');
//const User = Product.hasMany(Pet, { as: 'user' });

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
  app.post('/api/add-pet', function(req, res) {
    db.Pet.create({
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      breed: req.body.breed,
      abc: {id: 'ee6d7cc3-d6ae-49b7-9792-4c48ca89e255'},
      // user:
      //   {id: '6fd51a45-7ad5-4a42-bc2e-3f0762f7fbc6'},
      // role:
      //   {name: 'owner'},
    }, {
      include: db.User,


      
    })


        .then(function(dbDog) {
          res.json(dbDog);
        })
        .catch(function(err) {
          res.status(401).json(err);
        });
  });
};
