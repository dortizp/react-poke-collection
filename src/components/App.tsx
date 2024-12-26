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
    window.localStorage.setItem("username", username);
    setUsername(username);
    setPokemon({});
    setFavorites({});
  };
  const handleLogout = () => {
    window.localStorage.removeItem("username");
    setUsername("");
    setPokemon({});
    setFavorites({});
  };
  const handleSearch = async (pokemonName) => {
    const pokemonData = await searchPokemon(pokemonName);
    const newPokemon = {
      name: pokemonData.species.name,
      avatar_url: pokemonData.sprites.front_default,
      types: pokemonData.types.map((el) => el.type.name),
      weight: pokemonData.weight,
      height: pokemonData.height,
      id: pokemonData.id,
    };
    setPokemon(newPokemon);
  };
  const fetchFavorites = async () => {
    const newFavorites = await getFavorites(username);
    setFavorites(newFavorites);
  };

  const handleAddFavorites = async () => {
    await addFavorite(username, pokemon);
    await fetchFavorites();
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
          handleAddFavorites={handleAddFavorites}
          onFavorites={fetchFavorites}
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
