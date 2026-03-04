import styles from './Card.module.css'; // CSS Module — class names are scoped to this component
import Avatar from './Avatar';

// Card receives a single pokemon object as a prop and renders its stats.
// { pokemon } is destructuring — equivalent to writing (props) and then using props.pokemon throughout.
function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <h2>{pokemon.name}</h2>
      <Avatar pokemon={pokemon} />
      {/* <dl> is a description list — semantically correct for key/value pairs like stats */}
      <dl>
        <dt>Type</dt>
        <dd>{pokemon.type}</dd>
        <dt>HP</dt>
        <dd>{pokemon.hp}</dd>
        <dt>Attack</dt>
        <dd>{pokemon.attack}</dd>
      </dl>
    </div>
  );
}

export default Card;