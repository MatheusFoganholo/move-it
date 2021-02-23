import css from '../css/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return (
    <div className={css.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
