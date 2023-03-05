import { useState, useEffect } from "react";

import { FavoriteProvider } from "./contexts/favoriteContext";

import { Navbar } from "./components/Navbar/Navbar";
import { Pokedex } from "./components/Pokedex/Pokedex";
import { Searchbar } from "./components/Searchbar/Searchbar";

import { getPokemonData, getPokemons } from "./api";

import "./App.scss";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);

      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.data.count / itensPerPage));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);

    if (favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }

    setFavorites(updateFavorites);
  };

  return (
    <FavoriteProvider value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons }}>
      <div>
        <Navbar />
        <Searchbar />
        <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </FavoriteProvider>
  );
}

export default App;
