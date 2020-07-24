import React from 'react';

const MainAppView = ({ movies, error }) => {
  return <>{error ? <h1>Error</h1> : <h1>No Error</h1>}</>;
};
export default MainAppView;
