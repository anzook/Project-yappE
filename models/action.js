module.exports = function(sequelize, DataTypes) {
  const Action = sequelize.define('Action', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //timestamps: true,
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   name: 'createdAt',
    //},
  });

  Action.associates = function(models) {
    // Action.hasOne(models.Pet);
    // Action.hasOne(models.User);
    // Action.hasOne(models.Action_Type);
  };

  return Action;
};
