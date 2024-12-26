import { useEffect, useState } from "react";
import { getFavorites } from "../services/pokemon";
import PokemonSearch from "./PokemonSearch";
import Favorites from "./Favorites";
const CollectionPage = ({ name, onLogout , handleSearch, pokemon}) => {
  const [favorites, setFavorites] = useState({});
  console.log("username", name);
  const handleLogout = () => onLogout();
  const handleFavorites = async () => {
    const newFavorites = await getFavorites(name);
    console.log('newFavorites ',newFavorites )
    setFavorites(newFavorites)
  };

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
        <PokemonSearch pokemon={pokemon} handleSearch={handleSearch}/>
        <Favorites favorites={favorites}/>
      </div>
    </div>
  );
};

export default CollectionPage;
