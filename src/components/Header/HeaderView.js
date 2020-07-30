import React from 'react';

import { classNames } from '../../constants/classnames';
import { translations } from '../../constants/tranlations';
import './header.scss';

const { headerContainer, headerTextContainer, inputType } = classNames.header;
const { title, secondaryText, placeholderText } = translations.header;

const HeaderView = ({ handleSearch, getSearch, search }) => {
  return (
    <div className={headerContainer}>
      <div className={headerTextContainer}>
        <p>{title}</p>
        <p>{secondaryText}</p>
        <input
          type={inputType}
          placeholder={placeholderText}
          value={search}
          onChange={handleSearch}
          onKeyPress={getSearch}
        />
      </div>
    </div>
  );
};

export default HeaderView;
