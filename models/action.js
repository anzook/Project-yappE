module.exports = function (sequelize, DataTypes) {
    const Action = sequelize.define("Action", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        }
    });

    Action.associates = function (models) {
        Action.belongsTo(models.Pet);
        Action.belongsTo(models.User);
    }

    return Action;
}