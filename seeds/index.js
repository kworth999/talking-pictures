const seedUsers = require('./user-seeds');
const seedReviews = require('./review-seeds');
const { User } = require('../models');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedReviews();
  console.log('--------------');

  const Users = [
    {
        username: 'johnny88',
        password: 'password123'
    },
    {
        username: 'jessica2',
        password: 'password123'
    },
    {
        username: 'alan01',
        password: 'password123'
    }


];

  sequelize
  .sync({ force: false })
  .then(() => {
    return User.bulkCreate(Users);
  })
  .then(seedData => {
    console.log("All tables seeded successfully");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

  process.exit(0);
};

seedAll();