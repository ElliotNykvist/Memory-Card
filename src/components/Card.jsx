import { useEffect, useState} from "react";

function Card() {

  const [pokemonImageUrl, setPokemonImageUrl] = useState('');
  const pokemonTypes = 151;

  let randomPokemon = Math.floor(Math.random() * pokemonTypes);

  async function fetchData() {

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`, {mode: 'cors'});
      const data = await response.json();
      setPokemonImageUrl(data.sprites.other["official-artwork"].front_default);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  return <div className="card">
    <img src={pokemonImageUrl} className="cardImage" />
  </div> 
}

export default Card;