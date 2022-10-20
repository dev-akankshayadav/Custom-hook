import "./App.css";
import React from "react";
import useCounter from "./useCounter";
import ScreenComponent from "./ScreenComponent";

function App() {
  const [counter, increment, decrement, reset] = useCounter(0, 5);

  return (
    <div className="App">
      <h1>Counter Component</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <ScreenComponent />
    </div>
  );
}

export default App;
