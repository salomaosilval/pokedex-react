import { SlHeart } from "react-icons/sl";

import "./styles.scss";

export const Pokemon = (props) => {
  const { pokemon } = props;

  const onHeartClick = () => {
    console.log("Pode favoritar");
  };

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
            <SlHeart />
          </button>
        </div>
      </div>
    </div>
  );
};
