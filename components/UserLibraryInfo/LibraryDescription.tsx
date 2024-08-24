import FavoriteButton from '@app/components/Buttons/FavoriteButton';
import styles from './styles.module.scss';

type LibraryDescriptionProps = {
  totalSongs?: number;
};

export default function LibraryDescription({
  totalSongs,
}: LibraryDescriptionProps) {
  const total = totalSongs || 0;
  return (
    <div className={styles['title-container']}>
      <div className={styles['title-row']}>
        <div className={styles.title}>Your Library</div>
        <div>
          <FavoriteButton />
        </div>
      </div>
      <div className={styles.description}>
        You have {total} song{(total > 1 || !total) && 's'} in your library
      </div>
    </div>
  );
}
