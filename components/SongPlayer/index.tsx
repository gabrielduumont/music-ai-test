import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import Player from './Player';

type SongPlayerProps = {
  song: Song;
  songs: Song[];
};

export default function SongPlayer({ songs, song }: SongPlayerProps) {
  return (
    <div className={styles.container}>
      <Player song={song} />
    </div>
  );
}
