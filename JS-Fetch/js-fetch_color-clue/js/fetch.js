import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  try {
    const response = await fetch(colorApiUrl);
    if (!response.ok) {
      console.error("Bad Response!");
    }
    const colorData = await response.json();
    const hexCode = colorData.name.closest_named_hex;
    const colorName = colorData.name.value;
    setColorToGuess(hexCode, colorName);
  }
  catch(error) {
    console.error("error!");
  }
}