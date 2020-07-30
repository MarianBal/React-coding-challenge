import { searchById } from '../../utils/call';

export const moviesFilter = (movies, rating) =>
  rating !== null
    ? movies.filter(movie => (movie.vote_average <= rating ? movie : null))
    : movies;

export const openModal = modalSetter => id => searchMovie(id, modalSetter);

export const closeModal = modalSetter => () => modalSetter(null);

const searchMovie = async (id, modalSetter) => {
  const response = await searchById(id);
  if (response.data) modalSetter(response.data);
};
