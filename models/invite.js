module.exports = function(sequelize, DataTypes) {
  const Invite = sequelize.define('Invite', {
    invite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  });

  Invite.associate = function(models) {
    Invite.hasOne(models.Pet, {
    });
  };


  return Invite;
};
