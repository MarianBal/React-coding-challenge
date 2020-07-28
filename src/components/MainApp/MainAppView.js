import React from 'react';

import './mainapp.scss';
import Header from '../Header';
import MoviesContent from '../MoviesContent';

const MainAppView = ({ movies, error }) => {
  return (
    <>
      <Header />
      {error ? <h1>Error</h1> : <MoviesContent movies={movies} />}
    </>
  );
};

export default MainAppView;
