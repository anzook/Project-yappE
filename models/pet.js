module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 30],
      },
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 30],
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // ====Validations====
      validate: {
        isNumeric: true,
        max: 29, // only allow values <= 29
      },
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Pet.associate = function(models) {
    Pet.belongsToMany(models.User, {
      through: 'UserPet',
    //   foreignKey: 'petId',
    //   otherKey: 'userID',
    });
    //   onDelete: 'CASCADE',
    Pet.hasMany(models.Action);

  };

//   Pet.associate = function(models) {
//     Pet.hasMany(models.Invite, {
//     //   through: 'PetInvite', // pivot
//      // foreignKey: 'petId',
//     //   otherKey: 'inviteID',
//       //   //   onDelete: 'CASCADE',
//     });
//   };
  // Pet.belongsToMany(models.Contact, {
  //     through: models.User
  // });

  return Pet;
};
