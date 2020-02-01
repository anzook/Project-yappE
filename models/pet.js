module.exports = function (sequelize, DataTypes) {
    const Pet = sequelize.define("pet", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Pet;
};
