import { getMovies } from './api';
import { caller } from './caller';

export const getAllMovies = async () => {
  const response = await caller(getMovies());
  return response;
};
