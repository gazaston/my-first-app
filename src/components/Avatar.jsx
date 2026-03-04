function Avatar({ pokemon }) {
  return (
    // Template literal (backtick string) lets us embed pokemon.id directly into the URL.
    // The PokéAPI hosts sprite images at a predictable URL based on the Pokémon's numeric id.
    // alt={pokemon.name} provides a text fallback for screen readers and broken images.
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
  );
}

export default Avatar;