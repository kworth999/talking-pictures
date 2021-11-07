const { User } = require('../models');

const User = [
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

const seedUsers = () => User.bulkCreate(userdata, {individualHoooks: true});

module.exports = seedUsers;

