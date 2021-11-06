const router = require('express').Router();
const { User, Review } = require('../../models');
const checkAuth = require('../../utils/auth');

// /dashboard get all users posts
router.get('/', checkAuth, (req, res) => {
    Review.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [ 'id', 'title', 'user_id', 'rating', 'review' ],
        order: [[ 'created_at', 'DESC' ]],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbReviewData => {
        const reviews = dbReviewData.map(review => review.get({ plain: true }));
        res.render('dashboard', { reviews, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get a single review by review id
router.get('/edit/:id', checkAuth, (req, res) => {
    Review.findOne({ 
        where: { 
            id: req.params.id
        },
        attributes: [ 'id', 'title', 'user_id', 'rating', 'review' ],
        include: [ 
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        const reviews = dbReviewData.get({ plain: true });
        res.render('edit-post', { reviews, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/new', (req, res) => {
    res.render('new-post');
});

module.exports = router;