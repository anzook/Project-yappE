const bcrypt = require('bcryptjs');


module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    user_id: {
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
        len: [1, 40],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      // validate: {
      //     isDecimal: true, // checks for any numbers
      //     isLowercase: true, // checks for lowercase
      //     isUppercase: true // checks for uppercase
      // }
    }},
  {
    tableName: 'User',
  });

  User.associate = function(models) {
    User.hasMany(models.Role);// , {
    // through: 'User_Role', // pivot
    // });

    User.belongsToMany(models.Pet, {
      as: 'PetsInUsers',
      through: models.UserPet, // pivot
    });

    User.hasMany(models.Action);
  };

  // Creating a custom method for our User model. This will check if
  // an unhashed password entered by
  // the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of
  // the User Model lifecycle
  // In this case, before a User is created, we will automatically
  // hash their password
  User.addHook('beforeCreate', function(user) {
    user.password = bcrypt.hashSync(user.password,
        bcrypt.genSaltSync(10), null);
  });

  return User;
};
