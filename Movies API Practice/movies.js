class MovieAPI{
    constructor(){
        this.apikey = '945fe59c';
    }
    async getMovie(title){
        const movieResponse = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${this.apikey}&t=${title}`);
        const movie = await movieResponse.json();
        return {
            movie
        }
    }
}