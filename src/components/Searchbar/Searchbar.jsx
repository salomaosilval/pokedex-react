import { useState } from "react";
import "./styles.scss";

export const Searchbar = () => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = (e) => {
    console.log("Pokémon:", search);
  };

  return (
    <div className="searchbarContainer">
      <div className="searchbar">
        <input type="text" placeholder="Buscar Pokémon" onChange={onChangeHandler} />
      </div>
      <div className="searchbarBtn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};
