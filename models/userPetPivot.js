// tagPostGenre.js
module.exports = function(sequelize, DataTypes) {
  const UserPet = sequelize.define('UserPet', {
    user_pet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'User',
        key: 'user_id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    pet_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'Pet',
        key: 'pet_id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'UserPet',
  });

  UserPet.associate = (models) => {
    UserPet.belongsTo(models.User,
        {foreignKey: 'user_id', targetKey: 'user_id', as: 'User'});
    UserPet.belongsTo(models.Pet,
        {foreignKey: 'pet_id', targetKey: 'pet_id', as: 'Pet'});
  };

  return UserPet;
};
