import Card from "./components/Card";
import "./App.css";

const fruits = [
  { id: 1337,
  name: '🍌 Banana',
  color: 'yellow',
  }
  { id: 1338,
    name: '🍇 Grapes',
  color: 'purple',
  }
  { id: 1339,
  name: '🥥 Coconut',
  color: 'brown',
  }
  { id: 1340,
  name: '🥝 Kiwi',
  color: 'green',
  }
  { id: 1341,
  name: '🥭 Mango',
  color: 'yellow',
  }
  { id: 1342,
  name: '🍒 Cherry',
  color: 'red',
  }
  { id: 1343,
  name: '🍉 Watermelon',
  color: 'pink',
  }
]

export default function App() {
  const fruits = [];

  return (
    <div className="app">
      <Card name="🍌 banana" />
    </div>
  );
}






// ## Task

// Create an array 'fruits'. It should contain at least 5 objects which all have the properties 'name', 'id', 'color', e.g.:

// ```js
// {
//   id: 1337,
//   name: '🍌 Banana',
//   color: 'yellow',
// }
// ```

// - Hint: the ids need to be unique.

// Use the array method `map` to create a Card component for each fruit in your array. Use the name of each object as the text of the component and the id as the key prop.