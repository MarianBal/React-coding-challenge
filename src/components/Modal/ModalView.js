import React from 'react';
import { FaTimes } from 'react-icons/fa';

import './modal.scss';
import { classNames } from '../../constants/classnames';
import { translations } from '../../constants/tranlations';
import { imagePath } from '../../constants/url';

const {
  modalBackground,
  modalContainer,
  modalHeader,
  modalInfo,
  modalPoster,
  movieInfo,
  moreInfo,
  genresInfo,
  close
} = classNames.modal;

const { genreText, releaseDate } = translations.modal;

const ModalView = ({ modalData, closeModal }) => {
  return (
    <div className={modalBackground}>
      <div className={modalContainer}>
        <div
          className={modalHeader}
          style={{
            backgroundImage: `url(${imagePath}${modalData.backdrop_path})`
          }}
        />
        <div className={modalInfo}>
          <div className={modalPoster}>
            <img
              src={`${imagePath}${modalData.poster_path}`}
              alt={modalData.title}
            />
          </div>
          <div className={movieInfo}>
            <h4>{modalData.title}</h4>
            <p>{modalData.tagline}</p>
            <div className={moreInfo}>
              <span>{modalData.overview.substring(0, 480)}</span>
              <h5>{genreText}</h5>
              <div className={genresInfo}>
                {modalData.genres.map(genre => (
                  <p key={genre.name}>{genre.name} </p>
                ))}
              </div>
              <h5>{releaseDate}</h5>
              <p>{modalData.release_date}</p>
            </div>
          </div>
        </div>
        <div className={close} onClick={closeModal}>
          <FaTimes />
        </div>
      </div>
    </div>
  );
};

export default ModalView;
