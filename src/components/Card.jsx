import styles from './Card.module.css';
import Avatar from './Avatar';

function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <h2>{pokemon.name}</h2>
      <Avatar pokemon={pokemon} />
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