let searchText = document.querySelectorAll('.movie');
searchText.forEach(function (movie){
    getMovies(movie.innerHTML);
});

async function getMovies(searchText) {
    let response = await fetch('http://www.omdbapi.com/?apikey=2f2afafe&s='+searchText)
    let data = await response.json();
    console.log(data.Search);
    let movies = data.Search[0];
    let output = '';
    output += `
    <div class="col-md-3">
        <div class="well text-center">
            <img src="${movies.Poster}">
        </div>
    </div>
    `;
};