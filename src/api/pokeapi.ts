import axios from "axios";

export interface PokemonListEntry {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListEntry[];
}

export function getPokemon() {
  return axios
    .get<PokemonList>("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.data);
}
