module.exports = function (sequelize, DataTypes) {
    const Pet = sequelize.define("Pet", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            //====Validations====
            validate: {
                len: [1, 30]
            }
        }
    });

    Pet.associate = function (models) {
        Pet.belongsToMany(models.User, {
            through: 'User_Pet' // pivot
        });

        Pet.belongsToMany(models.Role, {
            through: models.User
        });


    };
    return Pet;
};
