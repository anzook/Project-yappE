/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
  app.get('/api/invites/:id', function(req, res) {
    db.Invite.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    }).catch();
  });

  app.post('/api/invites', function(req, res) {
    db.Invite.create({
      name: req.body.name,
      email: req.body.email,
      PetId: req.body.petId,
    }, {
      include: db.Pet,

    }).then(function(dbDog) {
      res.json(dbDog);
    })
        .catch(function(err) {
          res.status(401).json(err);
        });
  });

  app.delete('/api/invites/:id', function(req, res) {
    db.Invite.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });
};
