// const movieSource = document.getElementById('movie-template').innerHTML;
// const movieList = Handlebars.compile(movieSource);
let searchText = document.querySelectorAll('.movie');
searchText.forEach(function (movie){
    getMovies(movie.innerHTML);
});

async function getMovies(searchText) {
    let response = await fetch('http://www.omdbapi.com/?apikey=2f2afafe&s='+searchText)
    let data = await response.json();
    let movies = data.Search[0];
    console.log(data.Search);
    console.log(movies);
    return movies;
    // searchText.src = "${movies.Poster}"
};