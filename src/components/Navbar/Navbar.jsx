import { useContext } from "react";

import { FaHeart } from "react-icons/fa";

import { FavoriteContext } from "../../contexts/favoriteContext";

import "./styles.scss";

export const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="PokeAPI Logo"
            className="navbarImage"
          />
        </a>
      </div>
      <div>
        {favoritePokemons.length} <FaHeart />
      </div>
    </nav>
  );
};
