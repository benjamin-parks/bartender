const express = require('express');
const router = express.Router();

// Add other controllers here
const { getAllDrinks, getSingleDrink } = require('../controllers/drinkController');

router.get('/drinks', getAllDrinks);
router.get('/drinks/:drink_name', getSingleDrink);

module.exports = router;
