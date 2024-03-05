import "./App.css";

export default function App() {
  return <CreateButton color = "pink" disabled={false} text="click meee"/>
}

function CreateButton({color, disabled, text}) {
  const handleClick = () => {
    console.log("clicked");
    alert("clickety click")
   };
  return (<button style={{height: "100px", backgroundColor: color}} disabled={disabled} onClick = {handleClick}>
   {text}
  </button>
   );
}