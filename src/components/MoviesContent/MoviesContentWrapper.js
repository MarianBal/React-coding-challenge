import React, { useState } from 'react';

import MoviesContentView from './MoviesContentView';
import { handleEvent } from '../../utils/handleSetter';
import { moviesFilter } from './helper';

const MoviesContentWrapper = ({ movies }) => {
  const [rating, setRating] = useState(null);

  return (
    <MoviesContentView
      movies={moviesFilter(movies, rating)}
      handleRating={handleEvent(setRating)}
      rating={rating}
    />
  );
};

export default MoviesContentWrapper;
