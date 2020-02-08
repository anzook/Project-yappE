module.exports = function(sequelize, DataTypes) {
  const Action = sequelize.define('Action', {
    action_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Action.associates = function(models) {
    // Action.belongsTo(models.Pet);
    // Action.belongsTo(models.User);
    // Action.belongsTo(models.Action_Type);
  };

  return Action;
};
