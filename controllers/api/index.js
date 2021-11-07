const router = require('express').Router();

// User API routes - /api/user
router.use('/user', require('./user-routes'));

// Review API routes - /api/review
router.use('/reviews', require('./reviewRoutes'));

// Movie API routes - /api/review
// router.use('/movie', require('./movieRoutes'));

// Catch and handle all other unknown routes
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;