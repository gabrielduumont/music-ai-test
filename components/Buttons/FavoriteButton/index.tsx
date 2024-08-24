import Heart from '@app/components/Icons/Heart';
import styles from './styles.module.scss';
import { useState } from 'react';

type FavoriteButtonProps = {
  disabled?: boolean;
  onClick?: (toggled: boolean) => void;
};

export default function FavoriteButton({
  disabled,
  onClick,
}: FavoriteButtonProps) {
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
      data-checked={isToggled}
      onClick={onButtonClick}
    >
      <Heart isFilled={isToggled} />
      <p className={styles.label}>Favorites</p>
    </div>
  );
}
