const router = require('express').Router();

// User API routes - /api/user
router.use('/user', require('./userRoutes'));

// Review API routes - /api/review
router.use('/review', require('./reviewRoutes'));

// Catch and handle all other unknown routes
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;