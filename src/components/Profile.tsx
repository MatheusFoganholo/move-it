import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import css from '../css/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={css.profileContainer}>
      <img
        src="https://github.com/MatheusFoganholo.png"
        alt="Matheus Foganholo Profile Image"
      />
      <div>
        <strong>Matheus Foganholo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
