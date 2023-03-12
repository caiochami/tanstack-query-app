import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../../api/pokeapi";
import { List } from "../../components/Pokemons/List";

export function Index() {
  const query = useQuery({ queryKey: ["pokemon"], queryFn: getPokemon });

  if (query.isLoading) return <p>Loading...</p>;

  if (query.isError) return <pre>{JSON.stringify(query.error)}</pre>;

  console.log(query);

  return (
    <div>
      <List entries={query.data.results} />
    </div>
  );
}
