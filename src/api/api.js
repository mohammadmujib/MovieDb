// const apiKey = `?${process.env.REACT_APP_API_KEY}`;
const apiKey = "1363d7b67a206e14c8f8e2ac254a40e7";

const base_url = "https://api.themoviedb.org/3/movie/";

const now_Playing = `now_playing?api_key=${apiKey}`;

export const nowPlayingUrl = () => `${base_url}${now_Playing}`;
