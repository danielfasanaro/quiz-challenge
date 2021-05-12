export const getLocalRanking = () => JSON.parse(localStorage.getItem('ranking')) || [];

export const setLocalRanking = (newRanking) => (
  localStorage.setItem('ranking', JSON.stringify(newRanking))
);

export const deleteLocalRanking = () => localStorage.removeItem('ranking');
