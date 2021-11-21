const { default: axios } = require("axios");

document.getElementById('#movie').on('submit', (e) => {
    let searchText = document.getElementById('#movie').val();
    getMovies(searchText);
    e.preventDefault();
});

function getMovies(searchText) {
    axios.get('http://www.omdbapi.com/?apikey=2f2afafe&s='+searchText)
    .then((response) => {
        console.log(response);
        let movies = response.data.Search;
    })
}