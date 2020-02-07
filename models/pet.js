module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.INTEGER,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 30],
      },
    },
    age: {
      type: DataTypes.STRING,
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
      through: 'User_Pet', // pivot
    });

    Pet.belongsToMany(models.Role, {
      through: models.User,
    });

    // Pet.belongsToMany(models.Contact, {
    //     through: models.User
    // });
  };
  return Pet;
};
