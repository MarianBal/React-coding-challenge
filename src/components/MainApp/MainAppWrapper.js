import React, { useState, useEffect } from 'react';

import { getMovies, getSearch, dataSetter } from './helper';
import MainAppView from './MainAppView';
import { handleEvent } from '../../utils/handleSetter';

const MainAppWrapper = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    getMovies(setMovies, setError);
  }, []);

  return (
    <MainAppView
      movies={searchedMovies.length ? searchedMovies : movies}
      error={error}
      handleSearch={handleEvent(setSearch)}
      getSearch={getSearch(search, setSearchedMovies)}
    />
  );
};
export default MainAppWrapper;
