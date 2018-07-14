class UI{
    constructor(){
        this.movie = document.getElementById('movie');
    }
    displayMovie(movie){
        console.log(movie.Title);
        this.movie.innerHTML = `<div col-xs-6 col-sm-3 col-lg-2 col-xl-1">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <div class="panel-title">
                                                <img src="${movie.Poster}" height="300px" width="200px" style="overflow: hidden;" alt="random">
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <h5>${movie.Title}</h5>
                                            <h6>${movie.Genre}</h6>
                                        </div>
                                    </div>
                                </div>
        `;
    }
}

