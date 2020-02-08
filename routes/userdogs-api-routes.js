/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
  app.get('/api/userpet/:id', function(req, res) {
    db.UserPet.findOne({
      where: {
        id: req.params.id,
      },
      include: [{
        model: User,
        model: Pet,
      }],
    }).then(function(dbDog) {
      res.json(dbDog);
    }).catch();
  });

  app.post('/api/userpet', function(req, res) {
    db.UserPet.create({
      userId: req.body.userId,
      petId: req.body.petId,
    }).then(function(dbDog) {
      res.json(dbDog);
    })
        .catch(function(err) {
          res.status(401).json(err);
        });
  });

  app.delete('/api/userpet/:id', function(req, res) {
    db.UserPet.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });
};
