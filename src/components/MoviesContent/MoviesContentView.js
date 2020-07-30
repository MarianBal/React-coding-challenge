import React from 'react';

import './moviesContent.scss';
import { classNames } from '../../constants/classnames';
import { imagePath } from '../../constants/url';
import StarRating from '../StarRating';
import Modal from '../Modal';

const { moviesContainer, image, movieTitle } = classNames.moviesContainer;

const MoviesContentView = ({
  movies,
  handleRating,
  rating,
  modalData,
  handleMovie,
  closeModal
}) => (
  <>
    {!modalData && (
      <>
        <StarRating handleRating={handleRating} rating={rating} />
        <div className={moviesContainer}>
          {movies.map((movie, index) => (
            <div
              className={image}
              key={index}
              onClick={() => handleMovie(movie.id)}
            >
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
              <div className={movieTitle}>{movie.title}</div>
            </div>
          ))}
        </div>
      </>
    )}

    {modalData !== null && (
      <Modal modalData={modalData} closeModal={closeModal} />
    )}
  </>
);

export default MoviesContentView;
