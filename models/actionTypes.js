module.exports = function (sequelize, DataTypes) {
    const Action_Types = sequelize.define("Action_Types", {
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

    return Action_Types;
}