module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define('Pet', {
    pet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
    }}, {
    tableName: 'Pet',

  });

  Pet.associate = function(models) {
    Pet.belongsToMany(models.User, {
      through: models.UserPet, // pivot
      as: 'UsersInPets',
      // allowNull: false,
      // onDelete: 'CASCADE',
    });

    Pet.belongsToMany(models.Role, {
      through: 'Role_Pet',
      allowNull: false,
      onDelete: 'CASCADE',
    });
    Pet.hasMany(models.Action);

    // Pet.belongsToMany(models.Contact, {
    //     through: models.User
    // });
  };
  return Pet;
};
