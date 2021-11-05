const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User } = require('../../models');

router.get('/', (req, res) => {
    console.log('=====================');
    Review.findAll({ 
        attributes: [
        'id', 
        'rating',
        'comment',
        'user_id',
        'created_at'
    ],
    include: [
        {
            model: User,
            attributes: ['username']
        }
    ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;