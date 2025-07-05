import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import css from './App.module.css';

import { initialVotes } from '../../types/votes';
import type { Votes, VoteType } from '../../types/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  // додаємо голос`
  const handleVote = (type: VoteType) =>
    setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));

  // скидання
  const resetVotes = () => setVotes(initialVotes);

  const total = votes.good + votes.neutral + votes.bad;
  const positive = total ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        options={['good', 'neutral', 'bad']}
        onVote={handleVote}
        onReset={resetVotes}
        canReset={total > 0}
      />

      {total > 0 ? (
        <VoteStats votes={votes} totalVotes={total} positiveRate={positive} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
