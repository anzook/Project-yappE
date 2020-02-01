module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define("role", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petID: {}
    });
    return Role;
};
