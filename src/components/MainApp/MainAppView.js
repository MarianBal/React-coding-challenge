import React from 'react';

import './mainapp.scss';
import Header from '../Header';

const MainAppView = ({ movies, error }) => {
  return (
    <>
      <Header />
      {error ? <h1>Error</h1> : <h1>No Error</h1>}
    </>
  );
};

export default MainAppView;
