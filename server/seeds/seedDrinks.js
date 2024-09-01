const { Drink } = require('../models');

const drinkData = [
    {
      drink_name: 'Bourbon Old Fashioned',
      drink_ingredients: ['Cherry', 'Orange Slice', 'Sugar', 'Bitters', 'Water'],
      drink_instructions: 'Muddle cherry, orange slice, bitters, sugar, and water. Add 2oz of bourbon of choice.',
      drink_image: 'https://example.com/images/old-fashioned.jpg',  // Replace with actual image URL or path
      main_liquor: 'Bourbon',
    },
    {
        drink_name: 'Whiskey Old Fashioned',
        drink_ingredients: ['Cherry', 'Orange Slice', 'Sugar', 'Bitters', 'Water'],
        drink_instructions: 'Muddle cherry, orange slice, bitters, sugar, and water. Add 2oz of whiskey of choice.',
        drink_image: 'https://example.com/images/old-fashioned.jpg',  // Replace with actual image URL or path
        main_liquor: 'Whiskey',
    },
    {
      drink_name: 'Screwdriver',
      drink_ingredients: ['Orange Juice', 'Vodka'],
      drink_instructions: 'Mix 1.5oz vodka, add orange juice.',
      drink_image: 'https://example.com/images/screwdriver.jpg',  // Replace with actual image URL or path
      main_liquor: 'Vodka',
    },
    {
      drink_name: 'Margarita',
      drink_ingredients: ['Tequila', 'Lime Juice', 'Triple Sec', 'Salt'],
      drink_instructions: 'Shake tequila, lime juice, and triple sec with ice. Strain into a salt-rimmed glass.',
      drink_image: 'https://example.com/images/margarita.jpg',  // Replace with actual image URL or path
      main_liquor: 'Tequila',
    },
  ];

const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;