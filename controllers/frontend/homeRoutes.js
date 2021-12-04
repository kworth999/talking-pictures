const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User } = require('../../models');

router.get('/', (req, res) => {
    console.log("howdy doody");
    Review.findAll({ 
        attributes: [
        'id', 
        'title',
        'rating',
        'review',
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/post/:id', (req, res) => {
    Review.findOne({
        where: { 
            id: req.params.id
        },
        attributes: [
            'id', 
            'title',
            'rating',
            'review',
            'user_id',
            'created_at'
        ],
        include: [
        {
            model: User,
            attributes: [ 'username' ]
        }
    ]
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        const review = dbReviewData.get({ plain: true });

        res.render('single-post', {
            review,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;