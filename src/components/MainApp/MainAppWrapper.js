import React, { useState, useEffect } from 'react';

import { getMovies } from './helper';
import MainAppView from './MainAppView';

const MainAppWrapper = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovies(setMovies, setError);
  }, []);

  return <MainAppView movies={movies} error={error} />;
};
export default MainAppWrapper;
