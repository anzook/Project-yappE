/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
  app.get('/api/petinvite/:id', function(req, res) {
    db.PetInvite.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    }).catch();
  });

  app.post('/api/petinvite', function(req, res) {
    db.PetInvite.create({
      UserId: req.body.userId,
      petId: req.body.petId,
    }, {
      // include: db.User,
      // include: db.Action_Type,
    }).then(function(dbDog) {
      res.json(dbDog);
    })
        .catch(function(err) {
          res.status(401).json(err);
        });
  });

  app.delete('/api/petinvite/:id', function(req, res) {
    db.PetInvite.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });
};
