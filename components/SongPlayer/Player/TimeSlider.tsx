import styles from './styles.module.scss';
import Slider from '@app/components/Slider';
import { formatTime } from '@app/utils/formatTime';

type TimeSliderProps = {
  duration: number;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
};

export default function TimeSlider({
  duration,
  audioRef,
  currentTime,
  setCurrentTime,
}: TimeSliderProps) {
  const handleSliderChange = (newPercentage: number) => {
    if (audioRef.current && duration) {
      const newTime = (newPercentage / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const percentage = duration ? (currentTime / duration) * 100 : 0;
  const remainingTime = duration - currentTime;

  console.log({ duration, audioRef });

  return (
    <div className={styles.timer}>
      <div>
        <Slider percentage={percentage} onChange={handleSliderChange} />
      </div>
      <div className={styles['time-container']}>
        <div className={styles.time}>{formatTime(currentTime)}</div>
        <div className={styles.time}>{formatTime(duration)}</div>
      </div>
    </div>
  );
}
