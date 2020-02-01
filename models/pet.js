module.exports = function (sequelize, DataTypes) {
    const Pet = sequelize.define("pet", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Pet;
};
