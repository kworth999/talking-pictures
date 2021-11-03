const router = require('express').Router();
const { User, Review } = require('../../models/index');
const checkAuth = require('../../utils/auth');

// Get Movies
router.get('/', checkAuth, (req, res) => {
    // IMDB / OMDB API CALL

    // Get review to return with movies
});

// Get Movie by ID
router. get('/:id', checkAuth, (req, res) => {
    // IMDB / OMDB API CALL 
    
    // Get related reviews and return with movie details
});

module.exports = router;