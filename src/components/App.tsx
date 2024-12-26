import LoginPage from "./LoginPage";
import CollectionPage from "./CollectionPage";
import { useState } from "react";
import { searchPokemon, getFavorites, addFavorite } from "../services/pokemon";

const App = () => {
  const [username, setUsername] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [favorites, setFavorites] = useState({});
  const isLogin = username !== "";

  const handleLogin = (username) => {
    const isSavedUsername = window.localStorage.key("username");
    console.log("isSavedUsername ", isSavedUsername);
    window.localStorage.setItem("username", username);
    setUsername(username);
  };
  const handleLogout = () => {
    window.localStorage.removeItem("username");
    setUsername("");
  };
  const handleSearch = async (pokemonName) => {
    const pokemonData = await searchPokemon(pokemonName);
    console.log("pokemonData ", pokemonData);
    const newPokemon = {
      name: pokemonData.species.name,
      avatar_url: pokemonData.sprites.front_default,
      types: pokemonData.types.map((el) => el.type.name),
      weight: pokemonData.weight,
      height: pokemonData.height,
      id: pokemonData.id,
    };
    console.log("newPokemon ", newPokemon);
    setPokemon(newPokemon);
  };
  const handleFavorites = async () => {
    const newFavorites = await getFavorites(username);
    console.log("newFavorites ", newFavorites);
    setFavorites(newFavorites);
  };

  const handleAddFavorites = async () => {
    await addFavorite(username, pokemon);
  };

  return (
    <div>
      {isLogin ? (
        <CollectionPage
          name={username}
          onLogout={handleLogout}
          pokemon={pokemon}
          handleSearch={handleSearch}
          favorites={favorites}
          handleFavorites={handleFavorites}
          handleAddFavorites={handleAddFavorites}
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
