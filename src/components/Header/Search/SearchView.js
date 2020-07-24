import React from 'react';

import './search.scss';
import { translations } from '../../../constants/tranlations';
import { classNames } from '../../../constants/classnames';
const { placeholderText } = translations.search;
const { searchContainer } = classNames.header;

const SearchView = () => {
  return (
    <div className={searchContainer}>
      <input placeholder={placeholderText} />
    </div>
  );
};

export default SearchView;
