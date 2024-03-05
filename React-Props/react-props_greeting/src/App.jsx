import "./App.css";

export default function App() {
  return <Greeting name="Klaus"/>
}

function Greeting({name}) {
  return (<h1>{name === ("Jan", "Sven", "Marcell", "Gimena", "Klaus") ? "Hello Coach" : "Hello, " + name}</h1>);
}