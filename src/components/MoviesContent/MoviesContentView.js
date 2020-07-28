import React from 'react';

import './moviesContent.scss';
import { classNames } from '../../constants/classnames';
import { imagePath } from '../../constants/url';

const { moviesContainer, image, movieTitle } = classNames.moviesContainer;

const MoviesContentView = ({ movies }) => (
  <div className={moviesContainer}>
    {movies.map(movie => (
      <>
        <div className={image}>
          <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
          <div className={movieTitle}>{movie.title}</div>
        </div>
      </>
    ))}
  </div>
);

export default MoviesContentView;
