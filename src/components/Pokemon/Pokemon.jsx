import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoriteContext } from "../../contexts/favoriteContext";

import "./styles.scss";

export const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.data.name);
  };

  const heart = favoritePokemons.includes(pokemon.data.name) ? <FaHeart /> : <FaRegHeart />;

  return (
    <div className="pokemonCard">
      <div className="pokemonImageContainer">
        <img src={pokemon.data.sprites.front_default} alt={pokemon.name} className="pokemonImage" />
      </div>
      <div className="cardBody">
        <div className="cardTop">
          <h3>{pokemon.data.name}</h3>
          <div>#{pokemon.data.id}</div>
        </div>
        <div className="cardBottom">
          <div className="pokemonType">
            {pokemon.data.types.map((type, index) => {
              return (
                <div key={index} className="pokemonTypeText">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemonHeartBtn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};
