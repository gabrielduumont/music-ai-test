import styles from './styles.module.scss';

type SliderProps = {
  percentage: number;
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

const Slider = ({ percentage }: SliderProps) => {
  return (
    <div className={styles.slider}>
      <div className={styles['slider-track']}>
        <div
          className={styles['slider-thumb']}
          style={{ left: getProperSliderPosition(percentage) }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
