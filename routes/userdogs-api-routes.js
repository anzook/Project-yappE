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
        model: db.User,
        model: db.Pet,
      }],
    }).then(function(dbDog) {
      res.json(dbDog);
    }).catch();
  });

  // app.post('/api/userpet', function(req, res) {
  //   const currentUser = await db.User.findByPk(req.body.userId);
  //   await currentUser.addPet(PetAdd);
  //   res.json(PetAdd);

  //   db.UserPet.create({
  //     userId: req.body.userId,
  //     petId: req.body.petId,
  //   }).then(function(dbDog) {
  //     res.json(dbDog);
  //   })
  //       .catch(function(err) {
  //         res.status(401).json(err);
  //       });
  // });

  app.post('/api/userpet', async (req, res, next) => {
    try {
      const PetAdd = await db.Pet.findByPk(req.body.petId);
      const currentUser = await db.User.findByPk(req.body.userId);
      await currentUser.addPet(PetAdd);
      res.json(PetAdd);
    } catch (err) {
      // res.status(401).json(err);
      next(err);
    }
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
