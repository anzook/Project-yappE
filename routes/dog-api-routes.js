/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = function(app) {
  app.get('/api/pets/:id', function(req, res) {
    db.Pet.findOne({
      where: {
        id: req.params.pet_id,
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
      console.log(PetAdd);
      // const user = await db.User.findOne({ where: { user_id: req.body.userId }});
      // console.log(user);

      // const petUnit = PetAdd[0];
      // const pet = await db.Pet.findOne({ where: { user_id: req.body.userId }});
      // await user.addPet(PetAdd);
      // const currentUser = await db.User.findByPk(req.body.userId);
      // await currentUser.addPet(PetAdd);
      res.json(PetAdd);
    } catch (err) {
      // res.status(401).json(err);
      next(err);
    }
  });


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
