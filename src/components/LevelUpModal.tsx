import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import css from '../css/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={css.overlay}>
      <div className={css.levelUpModalContainer}>
        <header>{level}</header>
        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
