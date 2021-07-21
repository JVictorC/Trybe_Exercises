import logo from './logo.svg';
import './App.css';
import objctPokemons from './Data'
import React from 'react';
import CardPokemon from './PokemonCard';

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className='title'>PokeDex</h1>
        <div className='grid-cards'>
          {objctPokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          )
          )}
        </div>
      </>
    )
  }
}

export default App;
