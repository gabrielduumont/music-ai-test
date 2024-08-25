import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import { getBackgroundImageUrl } from '@app/utils/getBackgroundImageUrl';
import Heart from '@app/components/Icons/Heart';
import FavoriteIconButton from '@app/components/Buttons/FavoriteIconButton';
import Slider from '@app/components/Slider';
import { useState } from 'react';
import Play from '@app/components/Icons/Play';
import Pause from '@app/components/Icons/Pause';

type PlayerProps = {
  song: Song;
};

export default function Player({ song }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: getBackgroundImageUrl(song.song.files.coverArt),
        }}
      />
      <div className={styles.controls}>
        <div className={styles.description}>
          <div className={styles['play-control']}>
            {!isPlaying ? <Play /> : <Pause />}
          </div>
          <div className={styles['play-description']}>
            <div className={styles['title-container']}>
              <div className={styles.title}>{song.song.title}</div>
              <FavoriteIconButton songId={`${song.id}`} />
            </div>
            <div className={styles['album-info']}>
              <div className={styles['album-info-item']}>
                {song.song.artist}
              </div>
              <div className={styles['album-info-item']}>
                {song.song.album.title}
              </div>
              <div className={styles['album-info-item']}>
                {song.song.album.year}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timer}>
          <div>
            <Slider percentage={10} />
          </div>
          <div className={styles['time-container']}>
            <div className={styles.time}>0:00</div>
            <div className={styles.time}>TOTAL TIME</div>
          </div>
        </div>
      </div>
    </div>
  );
}
