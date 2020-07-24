import { getSettings } from './fetchSettings';
import { endpoints, url } from '../constants/url';

const apiURLConstructor = baseURL => extension => baseURL + extension;
let baseUrl = url; //DEFAULT URL IS DEVELOPMENT
if (window._CONFIG_) {
  baseUrl = window._CONFIG_.API_URL;
}
const moviesApi = apiURLConstructor(baseUrl);

export const getMovies = () => () => {
  return fetch(moviesApi(`${endpoints.discoverMovies}`), getSettings());
};
