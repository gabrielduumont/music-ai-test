import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import SongCard from './SongCard';

type SongsListProps = {
  songs?: Song[];
};

export default function SongsList({ songs }: SongsListProps) {
  if (!songs || !songs.length) {
    return <div className={styles.empty}>No songs found.</div>;
  }

  return (
    <div className={styles['list-container']}>
      {songs.map((song) => (
        <SongCard songEntry={song} key={song.id} />
      ))}
    </div>
  );
}
