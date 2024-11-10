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
