import ButtonCounter from "../button_counter/ButtonCounter";
import styles from './CounterButtonContainer.module.css';

type CounterButtonContainerType = (props: {
  handleClick: (arg0: (counter: number) => number) => void;
}) => JSX.Element;

const CounterButtonContainer: CounterButtonContainerType = ({ handleClick }) => {
  const handleClickIncrement = () => handleClick((counter: number) => counter + 1);
  const handleClickDecrement = () => handleClick((counter: number) => counter - 1);

  return (
    <div className={styles.counter_buttons}>
      <ButtonCounter
        handleClick={handleClickIncrement}
        className={styles.button_counter}
      >
        Increment
      </ButtonCounter>
      <ButtonCounter
        handleClick={handleClickDecrement}
        className={styles.button_counter}
      >
        Decrement
      </ButtonCounter>
    </div>
  );
};

export default CounterButtonContainer;