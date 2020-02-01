module.exports = function (sequelize, DataTypes) {
    const Contact = sequelize.define("contact", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user_id: {
            allowNull: true
        },
        relationship: {
            type: DataTypes.ENUM,
            values: []
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: true
            }
        }
    });
    return Contact;
};
