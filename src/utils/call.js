import { getMovies, searchMovies } from './api';
import { caller } from './caller';

export const getAllMovies = async () => {
  const response = await caller(getMovies());
  return response;
};

export const searchForMovies = async movie => {
  const response = await caller(searchMovies(movie));
  return response;
};
