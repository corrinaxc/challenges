import Card from "./components/Card";
import "./App.css";

export default function App() {
 const fruits = [
    { id: 1337,
    name: '🍌 Banana',
    color: 'yellow',
    },
    { id: 1338,
      name: '🍇 Grapes',
    color: 'purple',
    },
    { id: 1339,
    name: '🥥 Coconut',
    color: 'brown',
    },
    { id: 1340,
    name: '🥝 Kiwi',
    color: 'green',
    },
    { id: 1341,
    name: '🥭 Mango',
    color: 'yellow',
    },
    { id: 1342,
    name: '🍒 Cherry',
    color: 'red',
    },
    { id: 1343,
    name: '🍉 Watermelon',
    color: 'pink',
    }
  ]

  return (
    <div className="app">
      {fruits.map(({id, name, color}) => (<Card key={id} name={name} color={color}/>
       ))};
    </div>
  );
}