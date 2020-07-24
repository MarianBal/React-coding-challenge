export const getSettings = token => {
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
};
