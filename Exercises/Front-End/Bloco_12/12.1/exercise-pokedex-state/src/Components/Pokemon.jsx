import React, { Component } from 'react';
import pokemons from '../Data';
import CardPokemon from './PokemonCard';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      type: '',
    }
    this.hadleCounterPlus = this.hadleCounterPlus.bind(this)
    this.hadleCounterLess = this.hadleCounterLess.bind(this)
    this.hadleTypePokemon = this.hadleTypePokemon.bind(this)
  }

  hadleCounterPlus() {
    this.setState(previusState => ({
      counter: (previusState.counter === pokemons.length - 1) ? 0 : previusState.counter + 1,
    }))
  }

  hadleCounterLess() {
    console.log('clicou');
    this.setState(previusState => ({
      counter: (previusState.counter === 0) ? 0 : previusState.counter - 1,
    }))
  }

  hadleTypePokemon(event) {
    if (event.target.className === 'type-pokemon') { } 
    else {
      this.setState({ 
        type: (event.target.innerText === 'All Pokemon') ? '' : event.target.innerText,
        counter: 0,
       })
    }
  }

  render() {
    const { state } = this
    return (
      <>
        <main>
          <h1 className='title'>PokeDex</h1>
          <div className='grid-cards'>
            {pokemons
              .filter(pokemon => (state.type === '') ? true : state.type === pokemon.type)
              .filter((_pokemon, index) => (state.counter === 0) ? true : state.counter === index)
              .map(pokemon => <CardPokemon pokemon={pokemon} />)
            }
          </div>
        </main>
        <div className="Select-Pokemon">
          <h2 className="previus-pokemon" onClick={this.hadleCounterLess}>Previus Pokemon</h2>
          <h3>Index Pokemon: <span id='index'>{(this.state.counter === 0) ? 'All Pokemons' : this.state.counter}</span></h3>
          <h2 className="next-pokemon" onClick={this.hadleCounterPlus}>Next Pokemon</h2>
        </div>
        <div className="type-pokemon" onClick={this.hadleTypePokemon}>
          <h3>Electric</h3>
          <h3>Fire</h3>
          <h3>Bug</h3>
          <h3>Psychic</h3>
          <h3>Normal</h3>
          <h3>Dragon</h3>
          <h3>All Pokemon</h3>
        </div>
      </>
    );
  }
}

export default Pokemon