import { useState } from "react";

import "./styles.scss";

export const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());

    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
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
