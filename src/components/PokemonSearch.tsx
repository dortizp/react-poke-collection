import { useState } from "react";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const handleChangeName = (e) => setPokemonName(e.target.value);
  const handleSearch = () => {
    // TODO: call api to seach for a pokemon
  };
  const handleAdd = () => {
    // TODO: call api to add pokemon to favorites
  }
  const pokemon = {
    name: "Bulbasaur",
  };
  return (
    <div>
      <div>
        <input name="name" value={pokemonName} onChange={handleChangeName} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <p>Pokemon Result</p>
        {pokemon && pokemon.name}
        <button onClick={handleAdd}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default PokemonSearch;
