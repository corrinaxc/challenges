import "./App.css";

export default function App() {
  return <CreateButton color = "pink" disabled={false} text="click meee"/>
}

function CreateButton({color, disabled, text}) {
   return (<button style={{height: "100px", backgroundColor: color}} disabled={disabled}>
   {text}
  </button>)
}