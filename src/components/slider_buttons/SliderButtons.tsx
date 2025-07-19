import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './SliderButtons.module.css';

// Define style objects for rc-slider
const sliderStyles = {
  trackStyle: {
    backgroundColor: '#4a90e2',
    height: 6
  },
  handleStyle: {
    borderColor: '#4a90e2',
    height: 20,
    width: 20,
    marginTop: -7,
    backgroundColor: '#fff',
  },
  railStyle: {
    backgroundColor: '#d8d8d8',
    height: 6
  }
};

// Fallback arrow components
const FallbackArrow = ({ direction }: { direction: 'left' | 'right' }) => (
  <span className={direction === 'left' ? styles.arrowLeft : styles.arrowRight} />
);

type SliderButtonsProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

const SliderButtons: React.FC<SliderButtonsProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1
}) => {
  // Try to use react-icons, fallback to CSS arrows if not available
  let LeftArrow, RightArrow;

  try {
    const icons = require('react-icons/fa');
    LeftArrow = icons.FaArrowLeft;
    RightArrow = icons.FaArrowRight;
  } catch {
    LeftArrow = () => <FallbackArrow direction="left" />;
    RightArrow = () => <FallbackArrow direction="right" />;
  }

  const handleSliderChange = (val: number | number[]) => {
    if (typeof val === 'number') {
      onChange(val);
    } else if (Array.isArray(val)) {
      onChange(val[0]);
    }
  };

  const handleIncrease = () => onChange(Math.min(value + step, max));
  const handleDecrease = () => onChange(Math.max(value - step, min));

  return (
    <div className={styles.sliderContainer}>
      <button
        disabled={value <= min}
        onClick={handleDecrease}
        className={styles.sliderButton}
      >
        <LeftArrow />
        <span>Decrease</span>
      </button>

      <div className={styles.sliderTrack}>
        <Slider
          value={value}
          onChange={handleSliderChange}
          min={min}
          max={max}
          step={step}
          trackStyle={sliderStyles.trackStyle}
          handleStyle={sliderStyles.handleStyle}
          railStyle={sliderStyles.railStyle}
        />
      </div>

      <button
        disabled={value >= max}
        onClick={handleIncrease}
        className={styles.sliderButton}
      >
        <span>Increase</span>
        <RightArrow />
      </button>
    </div>
  );
};

export default SliderButtons;