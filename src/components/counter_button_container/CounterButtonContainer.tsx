import ButtonCounter from "../button_counter/ButtonCounter";
import styles from './CounterButtonContainer.module.css';

type CounterButtonContainerType = (props: {
  handleClick: (arg0: {
    (counter: number): number;
    (counter: number): number;
  }) => any;
}) => JSX.Element;

const CounterButtonContainer: CounterButtonContainerType = ({
  handleClick,
}) => {
  const handleClickIncrement = () =>
    handleClick((counter: number) => counter + 1);
  const handleClickDecrement = () =>
    handleClick((counter: number) => counter - 1);

  return (
    <div className={styles.counter_buttons}>
      <ButtonCounter handleClick={handleClickIncrement}>
        Increment
      </ButtonCounter>
      <ButtonCounter handleClick={handleClickDecrement}>
        Decrement
      </ButtonCounter>
    </div>
  );
};

export default CounterButtonContainer;
