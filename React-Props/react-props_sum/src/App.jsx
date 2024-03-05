import "./App.css";

export default function App() {
  return <SumFunction valueA={7} valueB={3} />
}

function SumFunction({valueA, valueB}) {
  const Total = valueA + valueB;
  console.log(Total);
  return <h1>{valueA} + {valueB} = {Total}</h1>
}