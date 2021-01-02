const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`;

export const fetchMovies = (search = "war") =>
  fetch(`${MOVIE_API_URL}&s=${search}`).then((response) => response.json());

const UpcomingMovie = fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=1363d7b67a206e14c8f8e2ac254a40e7&region=In&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&year=2021&with_original_language=hi`
);
