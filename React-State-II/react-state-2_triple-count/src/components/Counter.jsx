import { useState } from "react";
import "./Counter.css";


export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 3)
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
