module.exports = function (sequelize, DataTypes) {
    const UserPet = sequelize.define("user_pet", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user_id: {},
        pet_id: {}
    });
    return UserPet;
};
