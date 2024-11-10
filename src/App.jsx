import { useState } from 'react'
import useFetchCharacters from './hooks/useFetchCharacters'
import './App.css';

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [rickId, setRickId] = useState(1);

  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const urlRick = `https://rickandmortyapi.com/api/character/${rickId}`;

  //Hook
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchCharacters(urlPokemon);
  const { data: rickCharacter, loading: loadingRick, error: errorRick } = useFetchCharacters(urlRick);

  //Cambiar de personaje
  const nextPokemon = () => setPokemonId(pokemonId + 1);
  const previousPokemon = () => setPokemonId(Math.max(pokemonId - 1, 1));

  const nextRickCharacter = () => setRickId(rickId + 1);
  const previousRickCharacter = () => setRickId(Math.max(rickId - 1, 1));

  return (
    <>
    <h1>BÚSCADOR DE PERSONAJES</h1>
    <div className="App">
      <div className='cardCharacter'>
        <h2>Pokémon</h2>
        {loadingPokemon && <div className='spinner'></div>}
        {errorPokemon && <p>Error: {errorPokemon}</p>}
        {pokemon && (
          <>
            <p className='nameCharacter'>{pokemon.name}</p>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </>
        )}
        <div className='buttons'>
          <button onClick={previousPokemon} disabled={pokemonId === 1}>Anterior Pokémon</button>
          <button onClick={nextPokemon}>Siguiente Pokémon</button>
        </div>
      </div>
      <div className='cardCharacter'>
        <h2>Rick and Morty</h2>
        {loadingRick && <div className='spinner'></div>}
        {errorRick && <p>Error: {errorRick}</p>}
        {rickCharacter && (
          <>
            <p>{rickCharacter.name}</p>
            <img src={rickCharacter.image} alt={rickCharacter.name} />
          </>
        )}
        <div  className='buttons'>
          <button onClick={previousRickCharacter} disabled={rickId === 1}>Anterior Rick</button>
          <button onClick={nextRickCharacter}>Siguiente Rick</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;

/*
import useFetchCharacters from './hooks/useFetchCharacters'
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchCharacters(urlPokemon);
  const { data: rickCharacter, loading: loadingRick, error: errorRick } = useFetchCharacters(urlRick);

  return (
    <>
      <div className="App">
      <h2>Pokemon</h2>
      {loadingPokemon && <p>Cargando...</p>}
      {errorPokemon && <p>Error: {errorPokemon}</p>}
      {pokemon && (
        <>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}

      <h2>Rick and Morty</h2>
      {loadingRick && <p>Cargando...</p>}
      {errorRick && <p>Error: {errorRick}</p>}
      {rickCharacter && (
        <>
          <p>{rickCharacter.name}</p>
          <img src={rickCharacter.image} alt={rickCharacter.name} />
        </>
      )}
    </div>
    </>
  );
}

export default App;
*/
