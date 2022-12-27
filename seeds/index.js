const usersSeed = require('./users-seeds');
const postsSeed = require('./posts-seeds');
const commentsSeed = require('./comments-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await usersSeed();
    await postsSeed();
    await commentsSeed();
    process.exit(0);
}

seedAll();