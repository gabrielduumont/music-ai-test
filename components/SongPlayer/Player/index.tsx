import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import { getBackgroundImageUrl } from '@app/utils/getBackgroundImageUrl';
import FavoriteIconButton from '@app/components/Buttons/FavoriteIconButton';
import Slider from '@app/components/Slider';
import { useEffect, useRef, useState } from 'react';
import Play from '@app/components/Icons/Play';
import Pause from '@app/components/Icons/Pause';
import { getAudioUrl } from '@app/utils/getAudioUrl';

type PlayerProps = {
  song: Song;
};

export default function Player({ song }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioURL = getAudioUrl(song.song.files.audio);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (newPercentage: number) => {
    if (audioRef.current && duration) {
      const newTime = (newPercentage / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

      const updateTime = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          setDuration(audioRef.current.duration);
        }
      };

      audioRef.current.addEventListener('timeupdate', updateTime);

      return () => {
        const audioElement = document.getElementById('audio-player');
        if (audioElement) {
          audioElement.removeEventListener('timeupdate', updateTime);
        }
      };
    }
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const percentage = duration ? (currentTime / duration) * 100 : 0;
  const remainingTime = duration - currentTime;

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
          <div className={styles['play-control']} onClick={togglePlayPause}>
            <audio id="audio-player" ref={audioRef} src={audioURL} />
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
            <Slider percentage={percentage} onChange={handleSliderChange} />
          </div>
          <div className={styles['time-container']}>
            <div className={styles.time}>{formatTime(currentTime)}</div>
            <div className={styles.time}>{formatTime(remainingTime)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
