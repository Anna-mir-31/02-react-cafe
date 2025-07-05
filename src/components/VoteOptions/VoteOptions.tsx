import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  options: VoteType[];
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  options,
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      {options.map(opt => (
        <button
          key={opt}
          className={css.button}
          onClick={() => onVote(opt)}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}

      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
