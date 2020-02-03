module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            //====Validations====
            validate: {
                len: [1, 30]
            }
        },
        last_name: {
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
        }
    });

    User.associate = function (models) {
        User.belongsToMany(models.Role, {
            through:'User_Role' // pivot
        });

        User.belongsToMany(models.Pet, {
            through:'User_Pet' // pivot
        });

        // models.User.hasMany(models.Contact);
    };

    return User;
};
