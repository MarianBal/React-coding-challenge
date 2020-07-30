import React from 'react';

import './mainapp.scss';
import Header from '../Header';
import MoviesContent from '../MoviesContent';
import Error from '../Error';

const MainAppView = ({ movies, error, handleSearch, getSearch, search }) => (
  <>
    <Header handleSearch={handleSearch} getSearch={getSearch} search={search} />
    {error ? <Error /> : <MoviesContent movies={movies} />}
  </>
);

export default MainAppView;
