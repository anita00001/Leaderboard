// localstorage.js
const getFromStorage = () => {
  let storedData = JSON.parse(window.localStorage.getItem('Leaderboard-scores'));
  storedData = Array.isArray(storedData) ? storedData : [];
  return storedData;
};

const updateStorage = (data) => {
  window.localStorage.setItem('Leaderboard-scores', JSON.stringify(data));
};

export {
  getFromStorage,
  updateStorage,
};