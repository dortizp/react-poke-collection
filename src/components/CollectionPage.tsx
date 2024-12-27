import { useEffect, useState } from "react";
import PokemonSearch from "./PokemonSearch";
import Favorites from "./Favorites";
const CollectionPage = ({
  username,
  onLogout,
  onSearchPokemon,
  pokemon,
  favorites,
  onAddPokemonToFavorites,
  onFavorites,
}) => {
  const handleLogout = () => onLogout();
  useEffect(() => {
    onFavorites();
  }, []);

  return (
    <div>
      <div>
        <h1>Collection</h1>
        {username !== "" && <p>{`Hello ${username}`}</p>}
        <button onClick={handleLogout}>Exit</button>
        <PokemonSearch
          pokemon={pokemon}
          onSearchPokemon={onSearchPokemon}
          onAddPokemonToFavorites={onAddPokemonToFavorites}
          onFavorites={onFavorites}
          username={username}
        />
        <Favorites favorites={favorites} />
      </div>
    </div>
  );
};

export default CollectionPage;
