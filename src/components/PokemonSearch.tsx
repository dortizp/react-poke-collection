import { useState } from "react";
import { searchPokemon } from "../services/pokemon";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const handleChangeName = (e) => setPokemonName(e.target.value);
  const handleSearch = async () => {
    const pokemonData = await searchPokemon(pokemonName);
    console.log("pokemonData ", pokemonData);
    const newPokemon = {
      name: pokemonData.species.name,
      img_url: pokemonData.sprites.front_default,
      types: pokemonData.types.map((el) => el.type.name),
      weight: pokemonData.weight,
      height: pokemonData.height,
      id: pokemonData.id,
    };
    console.log("newPokemon ", newPokemon);
    setPokemon(newPokemon);
  };
  const handleAdd = () => {
    // TODO: call api to add pokemon to favorites
  };
  /*
  const pokemon = {
    name: "Bulbasaur",
  };
  */
  return (
    <div>
      <div>
        <input name="name" value={pokemonName} onChange={handleChangeName} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {pokemon && (
          <>
            <p>Name: {pokemon.name}</p>
            <p>Id: {pokemon.id}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
            <p>
              {pokemon?.types?.length > 0 && (
                <span>{pokemon.types.map((type) => type)}</span>
              )}
            </p>
            <img src={pokemon.img_url} />
          </>
        )}
        <button onClick={handleAdd}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default PokemonSearch;
