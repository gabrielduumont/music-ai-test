import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import Player from './Player';
import SongsList from '../SongsList';

type SongPlayerProps = {
  song: Song;
  songs: Song[];
};

export default function SongPlayer({ songs, song }: SongPlayerProps) {
  const relatedSongs = songs.filter((s) => song.related?.includes(s.id));
  return (
    <div className={styles.container}>
      <Player key={song.id} song={song} />
      <div className={styles.related}>
        <p className={styles['related-label']}>Related</p>
        <SongsList songs={relatedSongs} />
      </div>
    </div>
  );
}
