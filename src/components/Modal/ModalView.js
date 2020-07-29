import React from 'react';

import './modal.scss';
import { classNames } from '../../constants/classnames';
import { imagePath } from '../../constants/url';

const { modalBackground, modalContainer, modalHeader } = classNames.modal;

const ModalView = ({ modalData }) => {
  return (
    <div className={modalBackground}>
      <div className={modalContainer}>
        <div
          className={modalHeader}
          style={{
            backgroundImage: `url(${imagePath}${modalData.backdrop_path})`
          }}
        ></div>
        {/* <div className='modalInformacion'></div>
      <div className='contenedorModalInfo'>
        <div className='modalPoster'>
          <img src='${dire}${movie.poster_path}' />
        </div>
        <div className='modalInformacionPeli'>
          <h4>${movie.title}</h4>
          <p>${movie.tagline}</p>
          <div class='masInfo'>
            <span>${movie.overview}</span>
            <h5>genre</h5>
            <p>${genres}</p>
            <h5> release date</h5>
            <p>${movie.release_date}</p>
          </div>
        </div>
      </div>
      <div class='cerrar' onclick='cerrarModal()'>
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='times'
          class='svg-inline--fa fa-times fa-w-11'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 352 512'
        >
          <path
            fill='currentColor'
            d='M242.72 256l100.07-100.07c12.28-12.28
      12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28
      75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19
       0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28
       12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48
       0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
          ></path>
        </svg>
      </div> */}
      </div>
    </div>
  );
};

export default ModalView;
