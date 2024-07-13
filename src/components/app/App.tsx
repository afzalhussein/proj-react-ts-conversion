import React, { useState } from "react";
import Counter from "../counter/Counter";
import CounterButtonContainer from "../counter_button_container/CounterButtonContainer";
import "./App.css";
import RadioButton from '../radio_button/RadioButton';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {/* <Counter className="counter">{counter}</Counter>
      <CounterButtonContainer handleClick={setCounter} /> */}
      <RadioButton order={1} id={"radio1"} name={"radio-group1"} label={"Test 1"}></RadioButton>
      <RadioButton order={2} id={"radio2"} name={"radio-group1"} label={"Test 2"}></RadioButton>
      <RadioButton order={3} id={"radio3"} name={"radio-group1"} label={"Test 3"}></RadioButton>
      
      <RadioButton order={4} id={"radio4"} name={"radio-group2"} label={"Test 4"}></RadioButton>
      <RadioButton order={5} id={"radio5"} name={"radio-group2"} label={"Test 5"}></RadioButton>
      <RadioButton order={6} id={"radio6"} name={"radio-group2"} label={"Test 6"}></RadioButton>
    </div>
  );
}

export default App;
