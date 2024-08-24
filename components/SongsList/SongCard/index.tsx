import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import Heart from '@app/components/Icons/Heart';
import Link from 'next/link';
import { routes } from '@app/utils/constants/routes';

type SongCardProps = {
  songEntry: Song;
};

export default function SongCard({ songEntry }: SongCardProps) {
  return (
    <div className={styles.container}>
      <Link href={routes.songDetails(`${songEntry.id}`)}>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(/assets/images/${songEntry.song.files.coverArt})`,
          }}
        />
      </Link>
      <div className={styles.description}>
        <div className={styles['song-title']} title={songEntry.song.title}>
          <Link href={routes.songDetails(`${songEntry.id}`)}>
            {songEntry.song.title}
          </Link>
        </div>
        <div className={styles['description-row']}>
          <div className={styles['song-artist']}>{songEntry.song.artist}</div>
          <div className={styles['song-favorite']}>
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
}
