import { useState, useEffect } from "react";

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

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

export default App;
