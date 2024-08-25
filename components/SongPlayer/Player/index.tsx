import { Song } from '@app/data-types/song';
import styles from './styles.module.scss';
import { getBackgroundImageUrl } from '@app/utils/getBackgroundImageUrl';
import { useEffect, useRef, useState } from 'react';
import Play from '@app/components/Icons/Play';
import Pause from '@app/components/Icons/Pause';
import { getAudioUrl } from '@app/utils/getAudioUrl';
import TimeSlider from './TimeSlider';
import SongInfo from './SongInfo';

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

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const initializeDuration = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.addEventListener('loadedmetadata', initializeDuration);
    }

    return () => {
      const audioElement = document.getElementById('audio-player');
      if (audioElement) {
        audioElement.removeEventListener('timeupdate', updateTime);
        audioElement.removeEventListener('loadedmetadata', initializeDuration);
      }
    };
  }, [isPlaying]);

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
          <SongInfo
            albumTitle={song.song.album.title}
            albumYear={`${song.song.album.year}`}
            artist={song.song.artist}
            id={`${song.id}`}
            title={song.song.title}
          />
        </div>
        <TimeSlider
          audioRef={audioRef}
          duration={duration}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      </div>
    </div>
  );
}
