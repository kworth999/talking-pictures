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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/post/:id', (req, res) => {
    Reviews.findOne({
        where: { 
            id: req.params.id
        },
        attributes: [ 'id', 'imdb_id', 'user_id', 'rating', 'comment' ],
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