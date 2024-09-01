const { User } = require('../models');

const userData = [
    {
        username: "Test",
        email: "test@test.com",
        password: "test111!",
      },
      {
        username: "Test2",
        email: "test2@test.com",
        password: "test222!",
      },
      {
        username: "Test3",
        email: "test3@test.com",
        password: "test333!",
      }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;