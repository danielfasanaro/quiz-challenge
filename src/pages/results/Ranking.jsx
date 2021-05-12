import React from 'react';

import { getLocalRanking } from '../../services/ranking';

function Ranking() {
  const topFive = 5;
  const ranking = getLocalRanking().slice(0, topFive);
  return (
    <div>
      {ranking.map(({ user, score }, pos) => (
        <span key={ `${user || 'Sem nome'}-${pos}` } className="ranking-user-score">
          {`${user || 'Sem nome'} - ${score}%`}
        </span>
      ))}
    </div>
  );
}

export default Ranking;
