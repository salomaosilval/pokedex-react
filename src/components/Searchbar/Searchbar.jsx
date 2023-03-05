import { useState } from "react";

import { searchPokemon } from "../../api";

import "./styles.scss";

export const Searchbar = () => {
  const [search, setSearch] = useState();
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result.data);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  return (
    <div className="searchbarContainer">
      <div className="searchbar">
        <input type="text" placeholder="Buscar Pokémon" onChange={onChangeHandler} />
      </div>
      <div className="searchbarBtn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <div>
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
};
