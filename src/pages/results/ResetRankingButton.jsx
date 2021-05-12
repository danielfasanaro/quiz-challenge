import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteLocalRanking, getLocalRanking } from '../../services/localRanking';
import { setRanking } from '../../redux/reducers';

function ResetRankingButton() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={ () => {
        deleteLocalRanking();
        dispatch(setRanking(getLocalRanking()));
      } }
    >
      Reset Ranking
    </button>
  );
}

export default ResetRankingButton;
