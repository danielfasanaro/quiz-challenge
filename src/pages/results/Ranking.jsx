import React from 'react';
import { useSelector } from 'react-redux';

import ResetRankingButton from './ResetRankingButton';

function Ranking() {
  const { ranking } = useSelector((state) => state.quizReducer);
  const shownScores = 5;
  const topFive = ranking.slice(0, shownScores);

  return (
    <div>
      {topFive.map(({ user, score }, pos) => (
        <span key={ `${user || 'Sem nome'}-${pos}` } className="ranking-user-score">
          {`${user || 'Sem nome'} - ${score}%`}
        </span>
      ))}
      <ResetRankingButton />
    </div>
  );
}

export default Ranking;
