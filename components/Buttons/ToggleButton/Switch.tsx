import styles from './styles.module.scss';
import clsx from 'clsx';

type SwitchProps = {
  checked?: boolean;
};

export default function Switch({ checked }: SwitchProps) {
  return (
    <div
      className={clsx(styles['switch-container'], {
        [styles.checked]: checked,
        [styles.unchecked]: !checked,
      })}
    >
      <svg
        className={styles['switch-background']}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="38"
        viewBox="0 0 60 38"
        fill="none"
      >
        <path
          d={
            checked
              ? 'M0 16C0 7.16344 7.16344 0 16 0H42C50.8366 0 58 7.16344 58 16C58 24.8366 50.8366 32 42 32H16C7.16345 32 0 24.8366 0 16Z'
              : 'M2 16C2 7.16344 9.16344 0 18 0H44C52.8366 0 60 7.16344 60 16C60 24.8366 52.8366 32 44 32H18C9.16345 32 2 24.8366 2 16Z'
          }
          fill={checked ? '#00DAE8' : 'rgba(255, 255, 255, 0.25)'}
        />
      </svg>
      <svg
        className={styles['switch-knob']}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        style={{ transform: checked ? 'translateX(32px)' : 'translateX(0)' }}
      >
        <rect width="28" height="28" rx="14" fill="white" />
      </svg>
    </div>
  );
}
