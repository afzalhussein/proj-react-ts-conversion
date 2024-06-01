import React, { useState } from 'react';
import { Counter } from './components/counter';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div>{counter}</div>
      <Counter handleClick={ setCounter } />
    </div>
  );
}

export default App;
