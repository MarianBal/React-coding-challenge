export const moviesFilter = (movies, rating) =>
  rating !== null
    ? movies.filter(movie => (movie.vote_average <= rating ? movie : null))
    : movies;
