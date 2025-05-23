function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams. get(param);
}

window.onload = () => {
    const id = getQueryParam('id');
    fetch(`/api/movie/${id}`)
    .then(res => res.json())
    .then(movie => {
        document.getElementById('movie-details').innerHTML = `
          <div class="row">
                <div class="col-md-4">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid" alt="${movie.title}">
                </div>
                <div class="col-md-8">
                    <h2>${movie.title}</h2>
                    <p><strong>Sinopse:</strong> ${movie.overview}</p>
                    <p><strong>Lançamento:</strong> ${movie.release_date}</p>
                    <p><strong>Nota:</strong> ${movie.vote_average}</p>
                </div>
            </div>
        `;
    });
};