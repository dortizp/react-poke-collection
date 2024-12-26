import { useEffect, useState } from "react";
import PokemonSearch from "./PokemonSearch";
import Favorites from "./Favorites";
const CollectionPage = ({ name, onLogout , handleSearch, pokemon, favorites, handleFavorites, handleAddFavorites }) => {
  console.log("username", name);
  const handleLogout = () => onLogout();
  useEffect(()=> {
    handleFavorites()
  },[])

  return (
    <div>
      <div>
        <h1>Collection</h1>
        {name !== "" && <p>{`Hello ${name}`}</p>}
        {/* <button onClick={handleFavorites}>Get Pokemon Favorites</button> */}
        <button onClick={handleLogout}>Exit</button>
        <PokemonSearch pokemon={pokemon} handleSearch={handleSearch} handleFavorites={handleFavorites} handleAddFavorites={handleAddFavorites} />
        <Favorites favorites={favorites}/>
      </div>
    </div>
  );
};

export default CollectionPage;
