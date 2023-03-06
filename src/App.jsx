import { useState, useEffect } from "react";

import { FavoriteProvider } from "./contexts/favoriteContext";

import { Navbar } from "./components/Navbar/Navbar";
import { Pokedex } from "./components/Pokedex/Pokedex";
import { Searchbar } from "./components/Searchbar/Searchbar";

import { getPokemonData, getPokemons, searchPokemon } from "./api";

import "./App.scss";

const favoritesKey = "f";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);

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

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem(favoritesKey));

    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);

    if (favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }

    localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon);

    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }

    setLoading(false);
  };

  return (
    <FavoriteProvider value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons }}>
      <div>
        <Navbar />
        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <div className="notFoundText">Não achamos o Pokémon digitado, tente novamente!</div>
        ) : (
          <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;
