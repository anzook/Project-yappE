module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            //====Validations====
            validate: {
                len: [1, 30]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            //====Validations====
            validate: {
                len: [1, 30]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            //====Validations====
            // validate: {
            //     isDecimal: true, // checks for any numbers
            //     isLowercase: true, // checks for lowercase
            //     isUppercase: true // checks for uppercase
            // }
        },
        rolesID: {}
    });
    return User;
};
