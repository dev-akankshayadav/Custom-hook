import { useState } from "react";

export default function useCounter(initialValue, increaseCount) {
  const [value, setValue] = useState(initialValue, increaseCount);
  const increment = () => {
    return setValue(value + increaseCount);
  };
  const decrement = () => {
    return setValue(value - increaseCount);
  };
  const reset = () => {
    return setValue(initialValue);
  };
  return [value, increment, decrement, reset];
}
