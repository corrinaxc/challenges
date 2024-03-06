import "./App.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState('')

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {setCode(code + '🐡')
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {setCode(code + '🐋')
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {setCode(code + '🐠')
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {setCode('')
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}

// # React State: Emoji Passcode Checker

// In the `./src/App.jsx` file, you can find the building blocks for an emoji passcode checker.

// Looking at the `validCode` variable, we understand that the code consists of a sequence of three emojis. Each button click should "lock in" one emoji. If the code that was entered matches the passcode, your code will be confirmed as valid. The reset button should reset the code, so you can start over. Toward the bottom of the `App` function you'll find a line that conditionally generates a `p` element as soon as the input code matches the `validCode` declared at top of the function.

// ## Task

// You can use the following hints as a guideline:

// - Most importantly, you need to import a built-in React function you'll be using during this challenge.
// - You need to make sure to declare a state variable.
// - Write a `handleClick` function that updates the state variable according to which emoji button was clicked. The `handleClick` function will be called in every onClick of the buttons.
