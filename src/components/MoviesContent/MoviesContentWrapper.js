import React, { useState } from 'react';

import MoviesContentView from './MoviesContentView';
import { handleEvent } from '../../utils/handleSetter';

const MoviesContentWrapper = ({ movies }) => {
  const [rating, setRating] = useState(null);

  return (
    <MoviesContentView
      movies={movies}
      handleRating={handleEvent(setRating)}
      rating={rating}
    />
  );
};

export default MoviesContentWrapper;
