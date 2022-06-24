import type { NextPage } from "next";
import axios from "axios";
import PokeHome from "../Modules/PokeHome";
import { createContext, useState } from "react";

interface IPoke {
  name: string;
  url: string;
}
interface IPokeContext {
  pokemons: IPoke[];
  setPokemons: (pokemons: IPoke[]) => void;
}

export const PokeContext = createContext({} as IPokeContext);

const Home: NextPage = ({ pokemons: pokeSSR }: any) => {
  const [pokemons, setPokemons] = useState(pokeSSR);

  return (
    <PokeContext.Provider value={{ pokemons, setPokemons }}>
      <PokeHome />
    </PokeContext.Provider>
  );
};

export const getServerSideProps = async () => {
  const getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"
    );

    return response.data.results;
  };

  const pokemons = await getPokemons();

  return { props: { pokemons } };
};

export default Home;
