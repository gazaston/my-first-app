import "./App.css";
import { useState } from "react"; // useState lets us store values that trigger a re-render when they change
import Card from "./components/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  // filter holds the currently selected type (e.g. "Grass"), or "All" to show everything.
  // setFilter is the function we call to update it — we never modify filter directly.
  const [filter, setFilter] = useState("All");

  // Called when a filter button is clicked. Updates the filter state,
  // which causes React to re-render the component with the new filtered list.
  function handleFilterClick(type) {
    setFilter(type);
    console.log(`Filter set to: ${type}`);
  }

  // Hard-coded data — each object represents one Pokémon with the stats we want to display.
  // The id matches the PokéAPI numbering, which the Avatar component uses to fetch the sprite image.
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
    { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
    { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
    { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
    { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
    { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
    { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
    { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
    { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
    { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
    { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
    { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
    { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
    { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
    { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
    { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
    { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
    { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
    { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
    { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
  ];

  // Derived value — not stored in state, just computed on every render from the current filter.
  // If filter is "All", show everything; otherwise keep only Pokémon whose type matches.
  const filteredPokemons =
    filter === "All"
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.type === filter);

  // new Set() removes duplicate types (e.g. there are 3 Fire Pokémon but "Fire" appears once).
  // Spreading it back with ... converts the Set into a plain array so we can call .map() on it.
  const types = ["All", ...new Set(pokemons.map((pokemon) => pokemon.type))];

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-white my-10">
        A load of Pokemons
      </h1>
      <div className="filter-container">
        {/* Render one button per type. The active class is added when this type matches the current filter. */}
        {types.map((type) => (
          <button
            key={type}
            className={`filter ${filter === type ? "active" : ""}`} // template literal to conditionally add the active class
            onClick={() => handleFilterClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="card-container">
        {/* .map() loops over the filtered array and returns a Card for each Pokémon.
            key={pokemon.id} is required by React to efficiently track list items — it must be unique. */}
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <div className="explainer">
        <h2 className="my-10 font-bold">How this app works</h2>
        <SyntaxHighlighter language="python" style={okaidia}>{`state: filter = "All"

when user clicks a filter button:
  filter = the button's type (e.g. "Fire")
  → React re-renders the component

on every render:
  if filter == "All":
    filteredPokemons = all 20 pokemons
  else:
    filteredPokemons = pokemons where pokemon.type == filter

  types = unique list of all types in the data
        = ["All", "Grass", "Fire", "Water", ...]

  for each type in types:
    render a <button>
    if type == filter: add "active" class to button

  for each pokemon in filteredPokemons:
    render a <Card> with the pokemon's data`}</SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
