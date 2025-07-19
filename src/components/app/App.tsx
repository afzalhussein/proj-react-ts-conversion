import React, { useState } from "react";
import Counter from "../counter/Counter";
import CounterButtonContainer from "../counter_button_container/CounterButtonContainer";
import "./App.css";
import RadioButton from '../radio_button/RadioButton';
import RadioButtonContainer from "../radio_button_container/RadioButtonContainer";
import SliderButtons from "../slider_buttons/SliderButtons";

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(50);

  return (
    <div className="App">
      <div className="dashboard-container">
        {/* Counter Box */}
        <div className="dashboard-box counter-box">
          <h2>Counter</h2>
          <Counter className="counter">{counter}</Counter>
          <CounterButtonContainer handleClick={setCounter} />
        </div>

        {/* Radio Buttons Box */}
        <div className="dashboard-box radio-box">
          <h2>Options</h2>
          <RadioButtonContainer>
            <RadioButton order={1} id={"radio1"} name={"radio-group1"} label={"Test 1"}></RadioButton>
            <RadioButton order={2} id={"radio2"} name={"radio-group1"} label={"Test 2"}></RadioButton>
            <RadioButton order={3} id={"radio3"} name={"radio-group1"} label={"Test 3"}></RadioButton>
            <RadioButton order={4} id={"radio4"} name={"radio-group2"} label={"Test 4"}></RadioButton>
            <RadioButton order={5} id={"radio5"} name={"radio-group2"} label={"Test 5"}></RadioButton>
            <RadioButton order={6} id={"radio6"} name={"radio-group2"} label={"Test 6"}></RadioButton>
          </RadioButtonContainer>
        </div>

        {/* Slider Box */}
        <div className="dashboard-box slider-box">
          <h2>Current Value: {value}</h2>
          <SliderButtons
            value={value}
            onChange={setValue}
            min={0}
            max={100}
            step={5}
          />
        </div>
      </div>
    </div>
  );
}

export default App;