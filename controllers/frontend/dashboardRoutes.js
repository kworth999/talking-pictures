const router = require('express').Router();
const { User, Review } = require('../../models');
const checkAuth = require('../../utils/auth');


// /dashboard get all users posts
router.get('/', checkAuth, (req, res) => {
    console.log('DASHBOARD ROUTE HIT')
    Review.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [ 'id', 'title', 'rating', 'review', 'user_id' ],
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
        console.log(reviews);
        res.render('dashboard', { reviews, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get a single review by review id
router.get('/review/:id', checkAuth, (req, res) => {
    Review.findOne({ 
        where: { 
            id: req.params.id
        },
        attributes: [ 'id', 'title', 'rating', 'review', 'user_id' ],
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
        const review = dbReviewData.get({ plain: true });
        res.render('post-info', { review, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', checkAuth, (req, res) => {
    console.log('hello');
    Review.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'rating', 'review', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'Review not found' });
            return;
        }

        const review = dbReviewData.get({ plain: true });
        res.render('edit-post', { 
            review,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.get('/new', (req, res) => {
    res.render('new-review');
});

module.exports = router;