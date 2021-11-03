const router = require('express').Router();
const { User, Review } = require('../../models/index');
const checkAuth = require('../../utils/auth');

// Get all users - /api/review/
router.get('/', checkAuth, (req, res) => {
    Review.findAll()
    .then(reviewData => {
        if (!reviewData) {
            res.status(400).json({ message: 'Unable to find any reviews' });
            return;
        }

        res.status(200).json(reviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'The system was unable to process your request.',
            err
        })
    });
});

// Create review
router.post('/', checkAuth, (req, res) => {
    Review.create({
        ...req.body
    })
    .then(reviewData => {
        if (!reviewData) {
            res.status(400).json({message: 'Could not create review.'});
            return;
        }

        res.status(200).json(reviewData)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'The system was unable to process your request.'})
    });
});

// Get all reviews by movie ID

// Get all user reviews by user ID
// /api/review/user/:user_id
router.get('/user/:user_id', checkAuth, (req, res) => {
    Review.findAll({
        where: {
            user_id: req.params.user_id
        }
    })
    .then(reviewData => {
        if (!reviewData) {
            res.status(400).json({ message: 'Unable to find reviews using the provided user ID.'});
            return;
        }
        res.status(200).json(reviewData);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'The system was unable to process your request.',
            error
        })
    });
});

// Get top 10 user reviews

// Get review by ID
// /api/review/:id
router.get('/:id', checkAuth, (req, res) => {
    Review.findOne({
        where: {
            id
        }
    })
    .then(reviewData => {
        if (!reviewData) {
            res.status(400).json({message: 'Could not find review using provided ID.'});
            return;
        }

        res.status(200).json(reviewData)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'The system was unable to process your request.'})
    });
});

// Update review by ID

// Delete review by ID

module.exports = router;