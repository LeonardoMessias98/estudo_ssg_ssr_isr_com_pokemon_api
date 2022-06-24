import React from "react";
import { Container } from "./styles";

interface IPokeHome {
  pokemons: { name: string }[];
}

const PokeHome = ({ pokemons }: IPokeHome) => {
  console.log(pokemons, "pokemons");

  return (
    <Container>
      <ul>
        {pokemons?.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default PokeHome;
