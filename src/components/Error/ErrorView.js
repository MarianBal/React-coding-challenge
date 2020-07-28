import React from 'react';

import { classNames } from '../../constants/classnames';
import { translations } from '../../constants/tranlations';
import './error.scss';

const ErrorView = () => (
  <div className={classNames.error.errorContainer}>
    <h1>{translations.error.errorText}</h1>
  </div>
);
export default ErrorView;
