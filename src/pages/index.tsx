import type { NextPage } from "next";
import axios from "axios";
import PokeHome from "../Modules/PokeHome";

const Home: NextPage = ({ pokemons }: any) => {
  return <PokeHome pokemons={pokemons} />;
};

export const getStaticProps = async () => {
  const getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000"
    );

    return response.data.results;
  };

  const pokemons = await getPokemons();

  return { props: { pokemons } };
};

export default Home;
