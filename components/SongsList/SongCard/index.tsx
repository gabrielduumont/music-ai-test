import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import Heart from '@app/components/Icons/Heart';
import Link from 'next/link';
import { routes } from '@app/utils/constants/routes';
import { useSongsContext } from '@app/contexts/SongsContext';
import { useEffect, useState } from 'react';

type SongCardProps = {
  songEntry: Song;
};

export default function SongCard({ songEntry }: SongCardProps) {
  const [{ favoriteSongIds }, { toggleFavorite, isSongFavorite }] =
    useSongsContext();

  const [isThisSongFavorite, setIsThisSongFavorite] = useState(
    isSongFavorite(`${songEntry.id}`)
  );

  useEffect(() => {
    setIsThisSongFavorite(isSongFavorite(`${songEntry.id}`));
  }, [favoriteSongIds]);

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
          <div
            className={styles['song-favorite']}
            onClick={() => toggleFavorite(`${songEntry.id}`)}
          >
            <Heart isFilled={isThisSongFavorite} />
          </div>
        </div>
      </div>
    </div>
  );
}
