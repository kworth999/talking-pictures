const router = require('express').Router();
const { User, Review } = require('../../models');
const checkAuth = require('../../utils/auth');

// /dashboard get all users posts
router.get('/', checkAuth, (req, res) => {
    Review.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [ 'id', 'imdb_id', 'user_id', 'rating', 'comment' ],
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

module.exports = router;