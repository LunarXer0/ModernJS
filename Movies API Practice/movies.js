class MovieAPI{
    constructor(){
        this.apikey = '945fe59c';
    }
    async getMovie(title){
        const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.apikey}&${title}`);
        const movie = await movieResponse.json();
        return {
            movie
        }
    }
}