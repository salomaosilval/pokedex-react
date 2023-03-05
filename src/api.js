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
