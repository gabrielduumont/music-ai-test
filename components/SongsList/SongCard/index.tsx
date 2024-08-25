import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import Link from 'next/link';
import { routes } from '@app/utils/constants/routes';
import { useSongsContext } from '@app/contexts/SongsContext';
import { useEffect, useState } from 'react';
import { getBackgroundImageUrl } from '@app/utils/getBackgroundImageUrl';
import FavoriteIconButton from '@app/components/Buttons/FavoriteIconButton';

type SongCardProps = {
  songEntry: Song;
};

export default function SongCard({ songEntry }: SongCardProps) {
  const songId = `${songEntry.id}`;

  return (
    <div className={styles.container}>
      <Link href={routes.songDetails(songId)}>
        <div
          className={styles.background}
          style={{
            backgroundImage: getBackgroundImageUrl(
              songEntry.song.files.coverArt
            ),
          }}
        />
      </Link>
      <div className={styles.description}>
        <div className={styles['song-title']} title={songEntry.song.title}>
          <Link href={routes.songDetails(songId)}>{songEntry.song.title}</Link>
        </div>
        <div className={styles['description-row']}>
          <div className={styles['song-artist']}>{songEntry.song.artist}</div>
          <FavoriteIconButton songId={songId} />
        </div>
      </div>
    </div>
  );
}
