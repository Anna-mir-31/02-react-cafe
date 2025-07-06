import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import css from './App.module.css';

import type { Votes, VoteType } from '../../types/votes';

// локально определяем начальное состояние голосов
const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) =>
    setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));

  const resetVotes = () => setVotes(initialVotes);

  const total = votes.good + votes.neutral + votes.bad;
  const positive = total ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={total > 0}
      />

      {total > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={total}
          positiveRate={positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
