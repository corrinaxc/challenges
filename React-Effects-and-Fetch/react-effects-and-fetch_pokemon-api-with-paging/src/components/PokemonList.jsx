import { useEffect, useState } from "react";
import "./PokemonList.css";


export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState([0])

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setOffset(offset);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

   const handleNext = () => {
    setOffset((prevState) => prevState + 20)
   }

   const handlePrev = () => {
    if (offset >= 20) {
    setOffset((prevState) => prevState - 20)}
   }

  return (
    <main>
      {offset >= 20 && (<button type="button" className="button" onClick={handlePrev}>Previous Page</button>)}
      <button type="button" className="button" onClick={handleNext}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">{name}</li>
        ))}
      </ul>
    </main>
  );
}
