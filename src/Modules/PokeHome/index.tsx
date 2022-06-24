import axios from "axios";
import React, { useContext, useState } from "react";
import { PokeContext } from "../../pages";
import { Container } from "./styles";

const PokeHome = () => {
  const [page, setPage] = useState(1);
  const { pokemons, setPokemons } = useContext(PokeContext);

  async function handleLoadMore() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${(page + 1) * 10}`
    );

    setPokemons(response.data.results);
    setPage(page + 1);
  }

  return (
    <Container>
      <button onClick={handleLoadMore}>Carregar mais</button>
      <ul>
        {pokemons?.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default PokeHome;
