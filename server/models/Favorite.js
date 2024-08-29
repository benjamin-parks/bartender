const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    drink_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'drink',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
}
);