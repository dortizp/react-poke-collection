const POKECOLLECTION_BASE_URL =
  "https://poke-collection-lite-production.up.railway.app";
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getFavorites = async (username) => {
  const url = `${POKECOLLECTION_BASE_URL}/api/${username}/favorites`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const error = await response.json();
    return error;
  }
};

export const searchPokemon = async (name) => {
  const url = `${POKEAPI_BASE_URL}/${name}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const error = await response.json();
    return error;
  }
};

export const addFavorite = async (username, pokemon) => {
  const url = `${POKECOLLECTION_BASE_URL}/api/${username}/favorites`;
  const options = {
    method: "POST",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const error = await response.json();
    return error;
  }
};
