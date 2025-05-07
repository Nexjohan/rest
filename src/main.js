// Solo declara API_KEY una vez

async function getTrendingMoviesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();

  const movies = data.results;
  const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
  trendingPreviewMoviesContainer.innerHTML = ''; // Limpia contenido anterior

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}

async function getCategegoriesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();

  const categories = data.genres;
  const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
  previewCategoriesContainer.innerHTML = ''; // Limpia contenido anterior

  categories.forEach(category => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'id' + category.id);
    categoryTitle.textContent = category.name;

    categoryContainer.appendChild(categoryTitle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
}

async function getRatedMoviesByGuestSession(guestSessionId) {
  const res = await fetch(`https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}`);
  const data = await res.json();

  const ratedMovies = data.results;
  const ratedMoviesContainer = document.querySelector('#ratedMovies .movieList');
  ratedMoviesContainer.innerHTML = ''; // Limpia contenido anterior

  ratedMovies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

    movieContainer.appendChild(movieImg);
    ratedMoviesContainer.appendChild(movieContainer);
  });
}

// Ejecutar funciones
getCategegoriesPreview();
getTrendingMoviesPreview();

// Sustituye con tu guestSessionId real
const guestSessionId = 'TU_ID_AQUI';
getRatedMoviesByGuestSession(guestSessionId);
