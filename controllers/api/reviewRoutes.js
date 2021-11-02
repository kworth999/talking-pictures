const router = require('express').Router();
const { User, Review } = require('../../models/index');
// const checkAuth = require('../../utils/auth');

// Get all users - /api/review/
router.get('/', (req, res) => {
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

// Get all reviews by movie ID

// Get all user reviews

// Get top 10 user reviews

// Get review by ID

// Update review by ID

// Delete review by ID

module.exports = router;