import FavoriteButton from '@app/components/Buttons/FavoriteButton';
import styles from './styles.module.scss';

type LibraryDescriptionProps = {
  totalSongs?: number;
  onToggleFavoriteButton?: (shouldFilter: boolean) => void;
};

export default function LibraryDescription({
  totalSongs,
  onToggleFavoriteButton,
}: LibraryDescriptionProps) {
  const total = totalSongs || 0;
  return (
    <div className={styles['title-container']}>
      <div className={styles['title-row']}>
        <div className={styles.title}>Your Library</div>
        <div>
          <FavoriteButton onClick={onToggleFavoriteButton} />
        </div>
      </div>
      <div className={styles.description}>
        You have {total} song{(total > 1 || !total) && 's'} in your library
      </div>
    </div>
  );
}
