import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";


const initialLights = [
  {id: 1, name:"Living Room", isOn: false},
  {id: 2, name:"Kitchen", isOn: false},
  {id: 3, name:"Bedroom", isOn: false},
  {id: 4, name:"Bathroom", isOn: false},
  {id: 5, name:"Garage", isOn: false},
  {id: 6, name:"Porch", isOn: false},
  {id: 7, name:"Garden", isOn: false},
  {id: 8, name:"Office", isOn: false},
]

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const lightComponents = lights.map((light) => ({
  id: light.id,
  isOn:light.isOn,
  name: light.name
}))
  const lightCount = lights.filter(light => light.isOn).length;
  console.log(lightCount);

  function handleToggle(lightId) {
    const updatedLightArray = lights.map((light) => {
      return light.id === lightId ? {...light, isOn: !light.isOn} : light});
      setLights(updatedLightArray);
    };

  function toggleAllOn() {
    const updatedLightArray = lights.map((light) => {
      return {...light, isOn:true};
    })
    setLights(updatedLightArray);
  }

  function toggleAllOff() {
    const updatedLightArray = lights.map((light) => {
      return {...light, isOn:false};
    })
    setLights(updatedLightArray);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component 
      {...pageProps}
      lightCount={lightCount}
      lights={lights}
      toggleLight={handleToggle}
      toggleAllOn={toggleAllOn}
      toggleAllOff={toggleAllOff}
      />
    </Layout>
  );
}
