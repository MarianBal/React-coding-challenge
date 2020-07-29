import { getAllMovies, searchForMovies } from '../../utils/call';

export const getMovies = async (moviesSetter, errorSetter) => {
  const response = await getAllMovies();
  if (response.data) moviesSetter(response.data.results);
  else errorSetter(true);
};

export const getSearch = (value, valueSetter, dataSetter) => event => {
  if (event.key === 'Enter' && value.length) searchMovie(value, valueSetter);
  else valueSetter([]);

  dataSetter('');
};

const searchMovie = async (value, valueSetter) => {
  const response = await searchForMovies(value);
  if (response.data) valueSetter(response.data.results);
};
