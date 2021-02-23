import css from '../css/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={css.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <span className={css.currentExperience} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
