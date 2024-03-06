import "./App.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="container">
      <h1>{counter}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCounter(counter - 1);
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCounter(counter + 1);
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}