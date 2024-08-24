import { useState } from 'react';
import styles from './styles.module.scss';
import Switch from './Switch';

type ToggleButtonProps = {
  disabled?: boolean;
  onClick?: (toggled: boolean) => void;
  label?: string;
};

export default function ToggleButton({
  disabled,
  onClick,
  label,
}: ToggleButtonProps) {
  const [isToggled, setIsToggled] = useState(false);

  const onButtonClick = () => {
    if (disabled) return;

    const newValue = !isToggled;
    onClick?.(newValue);
    setIsToggled(newValue);
  };

  return (
    <div
      className={styles.container}
      data-disabled={disabled}
      onClick={onButtonClick}
    >
      {label && <p className={styles.label}>{label}</p>}
      <Switch checked={isToggled} />
    </div>
  );
}
