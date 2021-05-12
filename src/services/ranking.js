export const getLocalRanking = () => JSON.parse(localStorage.getItem('ranking')) || [];

export const setLocalRanking = (newScore) => {
  const ranking = getLocalRanking();
  const newRanking = [...ranking, newScore]
    .sort((user1, user2) => user2.score - user1.score);
  localStorage.setItem('ranking', JSON.stringify(newRanking));
};
