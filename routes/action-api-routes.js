/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
  app.get('/api/actions/:id', function(req, res) {
    db.Action.findOne({
      where: {
        id: req.params.id,
      },
    },
    {
      include: [{
        model: User,
        model: Pet,
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
    }, {
      include: db.User,
      include: db.Action_Type,
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
