/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
  app.get('/api/actions', function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Action.findAll({
      include: [{
        model: db.User,
        model: db.Pet,
      }],
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  app.get('/api/actions/:petid', function(req, res) {
    db.Action.findOne({
      where: {
        petId: req.params.petid,
      },
    },
    {
      include: [{
        model: db.User,
        model: db.Pet,
      }],
    }).then(function(dbDog) {
      res.json(dbDog);
    }).catch();
  });

  app.post('/api/actions', function(req, res) {
    db.Action.create({
      note: req.body.note,
      type: req.body.actionTypeId,
      UserId: req.body.userId,
      PetId: req.body.petId,

    }).then(function(dbDog) {
      res.json(dbDog);
    })
        .catch(function(err) {
          res.status(401).json(err);
        });
  });

  app.delete('/api/actions/:id', function(req, res) {
    db.Action.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });
};
