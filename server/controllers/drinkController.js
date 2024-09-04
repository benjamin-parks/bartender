const Drink = require('../models/Drink');

const getAllDrinks = async (req, res) => {
    try {
        const drinks = await Drink.findAll();
        res.status(200).json(drinks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

const getSingleDrink = async (req, res) => {
    try {
        const { drink_name } = req.params;
        const drink = await Drink.findOne({ where: { drink_name } });
        res.status(200).json(drink);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllDrinks, getSingleDrink};