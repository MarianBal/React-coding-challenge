import React, { useState, useEffect } from 'react';

import { getMovies, getSearch } from './helper';
import MainAppView from './MainAppView';
import { handleEvent } from '../../utils/handleSetter';

const MainAppWrapper = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getMovies(setMovies, setError);
  }, []);

  return (
    <MainAppView
      movies={movies}
      error={error}
      handleSearch={handleEvent(setSearch)}
      getSearch={getSearch(search)}
    />
  );
};
export default MainAppWrapper;
