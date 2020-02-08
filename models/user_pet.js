/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  const UserPet = sequelize.define('UserPet', {});

  UserPet.associate = function(models) {
    UserPet.belongsTo(models.User);
    UserPet.belongsTo(models.Pet);
  };

  return UserPet;
};
