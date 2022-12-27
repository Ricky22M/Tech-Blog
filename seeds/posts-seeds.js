const { Post } = require('../models');

const postData = [
    {
        title: 'Still new to JS can anyone give me advice?',
        content: 'So recently just learned the JavaScript coding language and....',
        user_id: 1
    },
    {
        title: 'Just learned SQL!',
        content: 'I recently just learned SQL and it is my favorite to...',
        user_id: 2
    }
];

const postsSeed = () => Post.bulkCreate(postData);

module.exports = postsSeed;