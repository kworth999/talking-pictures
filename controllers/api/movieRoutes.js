const router = require('express').Router();
const { User, Review } = require('../../models/index');
const checkAuth = require('../../utils/auth');

$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

// Get Movies
router.get('/', checkAuth, (req, res) => {
    // IMDB / OMDB API CALL
    axios.get('http://www.omdbapi.com?s=' + searchText)
    .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output ='';
        $.each(movies, (index, movie) => {
            output += `
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>${movie.Title}</h5>
                    <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                </div>
            </div>
            `;
        });
    });

        $('#movies').html(output);
    // Get review to return with movies
Review.findAll({ 
    attributes: 
    ['id', 'imdb_id', 'user_id', 'rating', 'comment'],
})
.then(dbReviewData => {
    const reviews = dbReviewData.map(review => review.get({ plain: true }));
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


// Get Movie by ID
router. get('/:id', checkAuth, (req, res) => {
    // IMDB / OMDB API CALL 
    axios.get('http://www.omdbapi.com?s=' + searchText)
    .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output ='';
        $.each(movies, (index, movie) => {
            output += `
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>${movie.Title}</h5>
                    <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                </div>
            </div>
            `;
        });
    });

        $('#movies').html(output);

    // Get related reviews and return with movie details
});

module.exports = router;