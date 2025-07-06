import type { VoteType } from '../../types/votes';

import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button type="button" className={css.btn} onClick={() => onVote('good')}>
        Good
      </button>
      <button type="button" className={css.btn} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button type="button" className={css.btn} onClick={() => onVote('bad')}>
        Bad
      </button>

      {canReset && (
        <button type="button" className={css.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
