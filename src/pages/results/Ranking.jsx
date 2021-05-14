import React from 'react';
import { useSelector } from 'react-redux';

import ResetRankingButton from './ResetRankingButton';

import './Ranking.css';

function Ranking() {
  const { ranking } = useSelector((state) => state.quizReducer);
  const shownScores = 5;
  const topFive = ranking.slice(0, shownScores);

  return (
    <div className="ranking has-text-white">
      {topFive.map(({ user, score }, pos) => (
        <span key={ `${user || 'Unknown'}-${pos}` } className="ranking-user-score">
          {`${user || 'Unknown'} - ${score}%`}
        </span>
      ))}
      <ResetRankingButton />
    </div>
  );
}

export default Ranking;
