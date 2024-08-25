import { useRef } from 'react';
import styles from './styles.module.scss';

type SliderProps = {
  percentage: number;
  onChange: (newPercentage: number) => void;
};

const getProperSliderPosition = (percentage: number) => {
  if (!percentage || percentage < 1) {
    return '0.5%';
  }
  if (percentage >= 99) {
    return '99.5%';
  }

  return `${percentage}%`;
};

const Slider = ({ percentage, onChange }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const sliderRect = slider.getBoundingClientRect();
      const startX = event.clientX;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.clientX - startX;
        const newPercentage = Math.min(
          Math.max(
            ((deltaX + (startX - sliderRect.left)) / sliderRect.width) * 100,
            0
          ),
          100
        );
        onChange(newPercentage);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleSliderClick = (event: React.MouseEvent) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const sliderRect = slider.getBoundingClientRect();
      const clickX = event.clientX - sliderRect.left;
      const newPercentage = (clickX / sliderRect.width) * 100;
      onChange(newPercentage);
    }
  };

  return (
    <div className={styles.slider} ref={sliderRef} onClick={handleSliderClick}>
      <div className={styles['slider-track']}>
        <div
          className={styles['slider-thumb']}
          style={{ left: getProperSliderPosition(percentage) }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
