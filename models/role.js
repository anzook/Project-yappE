module.exports = function(sequelize, DataTypes) {
  const Role = sequelize.define('Role', {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Role.associate = function(models) {
    Role.belongsToMany(models.User, {through: 'User_Role'}),
    Role.hasOne(models.Pet);
  }; // , //{
  // through: 'User_Role', // pivot
  // });
  // )}


  return Role;
};
