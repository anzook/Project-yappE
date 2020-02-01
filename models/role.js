module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define("role", {
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petID: {}
    });
    return Role;
};
