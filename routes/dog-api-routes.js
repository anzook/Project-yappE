/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
  app.get('/api/pets/:id', function(req, res) {
    db.Pet.findOne({
      where: {
        id: req.params.id,
      },
    },
    {
      include: [{
        model: db.User,
      }],
    }).then(function(dbDog) {
      res.json(dbDog);
    }).catch();
  });

  app.post('/api/pets', async (req, res, next) => {
    try {
      const PetAdd = await db.Pet.findOrCreate({
        where: {
          name: req.body.name,
          age: req.body.age,
          sex: req.body.sex,
          breed: req.body.breed,
        },
      });

      // const currentUser = await db.User.findByPk(req.body.userId);
      // await currentUser.addPet(PetAdd);
      res.json(PetAdd);

    } catch (err) {
      // res.status(401).json(err);
      next(err);
    }
  });


  // app.post('/api/pets', function(req, res) {
  //   db.Pet.findOrCreate({
  //     name: req.body.name,
  //     age: req.body.age,
  //     sex: req.body.sex,
  //     breed: req.body.breed,
  //     // UserId: req.body.userId,
  //   }).then(function(res){
  //     try {
  //       const currentDog = res.Pet.id;
  //       const currentUser = await User.findById(req.body.userId);
  //       await currentUser.addPet(pet[currentDog]);
  //       res.json(pet[currentDog]);
  //     } catch (error) {
  //       next(error);
  //     }
  //   }).then(function(dbDog) {
  //     res.json(dbDog);
  //   })
  //       .catch(function(err) {
  //         res.status(401).json(err);
  //       });
  // });

  app.delete('/api/pets/:id', function(req, res) {
    db.Pet.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });
};
