import styles from './styles.module.scss';
import FavoriteIconButton from '@app/components/Buttons/FavoriteIconButton';

type SongInfoProps = {
  id: string;
  title: string;
  artist: string;
  albumYear: string;
  albumTitle: string;
};

export default function SongInfo({
  id,
  title,
  artist,
  albumYear,
  albumTitle,
}: SongInfoProps) {
  return (
    <div className={styles['play-description']}>
      <div className={styles['title-container']}>
        <div className={styles.title}>{title}</div>
        <FavoriteIconButton songId={`${id}`} />
      </div>
      <div className={styles['album-info']}>
        <div className={styles['album-info-item']}>{artist}</div>
        <div className={styles['album-info-item']}>{albumTitle}</div>
        <div className={styles['album-info-item']}>{albumYear}</div>
      </div>
    </div>
  );
}
