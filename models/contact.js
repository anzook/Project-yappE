module.exports = function(sequelize, DataTypes) {
  const Contact = sequelize.define('contact', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 30],
      },
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
      },
    },
  });

  Contact.associate = function(models) {
    Contact.belongsTo(models.User, {
      foreignKey: {
        allowNull: true,
      },
    });

    // Contact.hasOne(models.Pet);
  };

  return Contact;
};
