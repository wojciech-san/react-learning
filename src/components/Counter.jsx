import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increamentBy, setIncreamentBy] = useState(1);
  function handleClick() {
    setCount(count + increamentBy);
  }
  function handleDecrement() {
    setCount(count - increamentBy);
  }
  function increaseIncreament() {
    setIncreamentBy(increamentBy + 1);
  }
  function decreaseIncreament() {
    setIncreamentBy(increamentBy - 1);
  }
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>Increase value by: {increamentBy}</h1>
      <button onClick={increaseIncreament}>Increment</button>
      <button onClick={decreaseIncreament}>Decrement</button>
    </div>
  );
}
