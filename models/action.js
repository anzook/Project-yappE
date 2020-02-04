module.exports = function (sequelize, DataTypes) {
    const Action = sequelize.define("Action", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.ENUM,
            values: ['poop', 'pee', 'high-five', 'sit', 'speak', 'roll-over', 'walked', 'fetch']
        },
        type: {
            type: DataTypes.ENUM,
            values: ['potty time', 'exercise', 'tricks']
        }
    });

    Action.associates = function (models) {
        Action.belongsTo(models.Pet);
    }

    return Action;
}