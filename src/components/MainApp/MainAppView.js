import React from 'react';

import './mainapp.scss';
import Header from '../Header';
import MoviesContent from '../MoviesContent';
import Error from '../Error';

const MainAppView = ({ movies, error, handleSearch, getSearch }) => {
  return (
    <>
      <Header handleSearch={handleSearch} getSearch={getSearch} />
      {error ? <Error /> : <MoviesContent movies={movies} />}
    </>
  );
};

export default MainAppView;
