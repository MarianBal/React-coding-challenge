import React, { useState } from 'react';

import MoviesContentView from './MoviesContentView';
import { handleEvent } from '../../utils/handleSetter';
import { moviesFilter, openModal } from './helper';

const MoviesContentWrapper = ({ movies }) => {
  const [rating, setRating] = useState(null);
  const [modalData, setModalData] = useState(null);

  return (
    <MoviesContentView
      movies={moviesFilter(movies, rating)}
      handleRating={handleEvent(setRating)}
      rating={rating}
      modalData={modalData}
      handleMovie={openModal(setModalData)}
    />
  );
};

export default MoviesContentWrapper;
