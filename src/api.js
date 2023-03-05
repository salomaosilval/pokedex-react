import axios from "axios";

export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log("Erro: ", error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit${limit}&offset=${offset}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log("Erro: ", error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log("Erro: ", error);
  }
};
