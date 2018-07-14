const api = new MovieAPI;
const ui = new UI;


const search = document.getElementById('searchMovie');

search.addEventListener('keyup', (e) =>{
    const title = e.target.value;
    if(title !== ''){
        api.getMovie(title)
            .then(data => {
                //TODO: Show movie info in front end
                console.log(data.movie);
                if(data.movie.Response === 'False'){
                    console.log('Error');
                }
                else{
                    ui.displayMovie(data.movie);
                }
            })
            .catch(err => console.log(err));
    }
    else{
        ui.showAlert('No movie found', 'alert alert-danger');
    }
});