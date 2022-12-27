const { Comment } = require('../models');

const commentsData = [
    {
        comment_text: "Wow!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Astonishing!",
        user_id: 2,
        post_id: 2
    }
];

const commentsSeed = () => Comment.bulkCreate(commentsData);

module.exports = commentsSeed;