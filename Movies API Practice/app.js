const api = new MovieAPI;

const search = document.getElementById('searchMovie');

search.addEventListener('keyup', (e) =>{
    const title = e.target.value;
    api.searchMovie(title)
        .then(data => {
            //TODO: Show movie info in front end
            console.log(data.movie);
        })
        .catch(err => console.log(err));
});