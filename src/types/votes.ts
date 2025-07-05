// тип однієї опції
export type VoteType = 'good' | 'neutral' | 'bad';

// обʼєкт голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

// початковий стан
export const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};
