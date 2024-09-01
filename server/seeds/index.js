const sequelize = require('../config/connection');
const seedUsers = require('./seedUsers');
const seedDrinks = require('./seedDrinks');

const seedAll = async () => {
  await sequelize.sync({ force: true }); // Use `force: true` to ensure tables are created
  console.log('\n--- DATABASE SYNCED ---\n');

  await seedUsers();
  console.log('----------USERS HAVE BEEN SEEDED!----------');

  await seedDrinks();
  console.log('----------DRINKS HAVE BEEN SEEDED!----------')

  process.exit(0);
};

seedAll();
