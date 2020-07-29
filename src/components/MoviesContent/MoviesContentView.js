import React from 'react';

import './moviesContent.scss';
import { classNames } from '../../constants/classnames';
import { imagePath } from '../../constants/url';
import StarRating from '../StarRating';

const { moviesContainer, image, movieTitle } = classNames.moviesContainer;

const MoviesContentView = ({ movies, handleRating, rating }) => (
  <>
    <StarRating handleRating={handleRating} rating={rating} />
    <div className={moviesContainer}>
      {movies.map((movie, index) => (
        <div className={image} key={index}>
          <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
          <div className={movieTitle}>{movie.title}</div>
        </div>
      ))}
    </div>
  </>
);

export default MoviesContentView;
