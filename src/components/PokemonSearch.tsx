import { useState } from "react";

const PokemonSearch = ({ pokemon, handleSearch , handleFavorites}) => {
  const [pokemonName, setPokemonName] = useState("");
  const handleChangeName = (e) => setPokemonName(e.target.value);
  const handleClickAdd = () => {
    handleFavorites(pokemon)
    // TODO: call api to add pokemon to favorites
  };
  const handleClick = () => {
    handleSearch(pokemonName);
  };
  return (
    <div>
      <div>
        <input name="name" value={pokemonName} onChange={handleChangeName} />
        <button onClick={handleClick}>Search</button>
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
        <button onClick={handleClickAdd}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default PokemonSearch;
