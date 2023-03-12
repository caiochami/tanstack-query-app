export function List({ entries: PokemonListEntry }) {
  return (
    <ul>
      {entries.map((pokemonEntry) => (
        <li key={pokemonEntry.name}>{pokemonEntry.name}</li>
      ))}
    </ul>
  );
}
