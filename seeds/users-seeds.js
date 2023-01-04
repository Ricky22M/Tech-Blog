const { User } = require('../models');

const usersData = [
    {
        username: 'Ricky',
        password: 'Medina'
    },
    {
        username: 'Rick',
        password: 'shhh'
    }
];

const usersSeed = () => User.bulkCreate(usersData);

module.exports = usersSeed;