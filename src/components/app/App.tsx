import React, { useState } from "react";
import Counter from "../counter/Counter";
import CounterButtonContainer from "../counter_button_container/CounterButtonContainer";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter className="counter">{counter}</Counter>
      <CounterButtonContainer handleClick={setCounter} />
    </div>
  );
}

export default App;
