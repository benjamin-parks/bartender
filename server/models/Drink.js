const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model {}

Drink.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_ingredients: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        drink_instructions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        main_liquor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
    ,
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'drink',
    }
);

module.exports = Drink;
  