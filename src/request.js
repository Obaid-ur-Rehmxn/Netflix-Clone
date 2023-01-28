const API_KEY = "4f9727dc3c397257b8e47682ca2299dc";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `https://api.themoviedb.org/3movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1&with_networks=213`,
  fetchHistoryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
};
export default requests;
