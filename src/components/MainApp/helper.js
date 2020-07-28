import { getAllMovies } from '../../utils/call';

export const getMovies = async (moviesSetter, errorSetter) => {
  const response = await getAllMovies();
  if (response.data) moviesSetter(response.data.results);
  else errorSetter(true);
};

export const getSearch = value => event => {
  if (event.key === 'Enter') {
    console.log(value);
  }
};
