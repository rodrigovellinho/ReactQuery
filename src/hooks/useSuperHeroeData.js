import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroeData = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId));
};
