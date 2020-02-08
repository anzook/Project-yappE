module.exports = function(sequelize, DataTypes) {
  const Action_Type = sequelize.define('Action_Types', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['potty', 'exercise', 'tricks'],
    },
}, {
        timestamps: false,
    
  });

  Action_Type.associate = function(models) {
    Action_Type.hasMany(models.Action);
  };

  return Action_Type;
};
