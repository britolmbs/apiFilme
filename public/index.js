let currentPage = 1;

function loadMovies(page = 1) {
    fetch(`/api/movies?page=${page}`)
    .then(res => res.json())
    .then(data => {
        const moviesDiv = document.getElementById('movies');
        moviesDiv.innerHTML = '';
        data.results.forEach(movie => {
            moviesDiv.innerHTML += `
              <div class="col-md-3 mb-4">
                  <div class="card h-100">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <a href="details.html?id=${movie.id}" class="btn btn-primary">Detalhes</a>
                    </div>
                  </div>
                </div>
            `;
        });

        const pagination = document.getElementById('pagination');
        pagination.innerHTML = `
          <li class="page-item ${page == 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="loadMovies(${page - 1}); return false;">Anterior</a>
          </li>
          <li class="page-item">
            <span class="page-link">${page}</span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" onclick="loadMovies(${page + 1}); return false;">Próxima</a>
          </li>
        `;
        currentPage = page;
    });
}

window.onload = () => loadMovies();