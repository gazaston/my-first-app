function Avatar({ pokemon }) {
  return (
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
  );
}

export default Avatar;