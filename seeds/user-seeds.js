const { User } = require('../models');
const bcrypt = require('bcrypt');

let pass =  bcrypt.hashSync('password123', 5)

const Users = [
    {
        username: 'johnny88',
        password: pass
    },
    {
        username: 'jessica2',
        password: pass
    },
    {
        username: 'alan01',
        password: pass
    }


];

const seedUsers = () => User.bulkCreate(Users, {individualHoooks: true});

module.exports = seedUsers;

