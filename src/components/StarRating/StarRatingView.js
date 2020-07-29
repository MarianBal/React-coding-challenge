import React from 'react';
import { FaStar } from 'react-icons/fa';

import { classNames } from '../../constants/classnames';
import { translations } from '../../constants/tranlations';
import './starContainer.scss';

const {
  starContainer,
  inputType,
  inputName,
  starClass,
  activeStar,
  disablestar
} = classNames.starRating;
const { starRating } = translations;

const StarRatingView = ({ handleRating, rating }) => (
  <div className={starContainer}>
    <span>{starRating.rating}</span>
    {[...Array(5)].map((star, index) => {
      const ratingValue = (index + 1) * 2;
      return (
        <label key={index}>
          <input
            type={inputType}
            name={inputName}
            value={ratingValue}
            onClick={handleRating}
          />
          <FaStar
            size={25}
            color={ratingValue <= rating ? activeStar : disablestar}
            className={starClass}
          />
        </label>
      );
    })}
  </div>
);
export default StarRatingView;
