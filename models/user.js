/**
 * User database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            name: {
                type: DataTypes.STRING(80),
                allowNull: true,
            },
            balance: {
                type: DataTypes.STRING(80),
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            userType: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            createdById: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            logged_in: {
                type: DataTypes.ENUM('yes', 'no'),
                allowNull: true,
                defaultValue: 'no'
            },
        },
        {
            timestamps: true,
            paranoid: true,
        },
    );

    return User
}

