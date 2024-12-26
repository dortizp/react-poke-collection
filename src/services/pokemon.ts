const POKECOLLECTION_BASE_URL =
  "https://poke-collection-lite-production.up.railway.app";
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getFavorites = async (username) => {
  const url = `${POKECOLLECTION_BASE_URL}/api/${username}/favorites`;
  const response = await fetch(url);
  console.log("response ", response);
  if (response.ok) {
    const data = await response.json();
    return data
    // console.log("data ", data);
  } else {
    const error = await response.json();
    return error
    // console.log(error.message || "an error ocurred");
  }
};

export const searchPokemon = async (name) => {
  const url = `${POKEAPI_BASE_URL}${name}`;
  const response = await fetch(url);
  console.log("response ", response);
  if (response.ok) {
    const data = await response.json();
    // console.log("data ", data);
    return data;
  } else {
    const error = await response.json();
    // console.log(error.message || "an error ocurred");
    return error;
  }
};

export const addFavorite = async (username, pokemon) => {
  const url = `${POKEAPI_BASE_URL}${name}`;
  const options = {
    method: "POST",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  console.log("response ", response);
  if (response.ok) {
    const data = await response.json();
    // console.log("data ", data);
    return data;
  } else {
    const error = await response.json();
    // console.log(error.message || "an error ocurred");
    return error;
  }
};
