import React, { Component } from 'react';
import PokemonItem from '../../Components/Pokecard/Pokecard';
import classes from './Pokedex.module.css';

class Pokemon extends Component {
    render() {
        var pokemonList = this.props.pokemons.map(pokemon => {
            return (
                <PokemonItem 
                    key={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    image={pokemon.image}
                />
            )
        })
        return (
            <div className={classes.Pokemon}>
                <h1>Pokedex</h1>
                <div className={classes.PokemonItems}>
                    {pokemonList}
                </div>
                
            </div>
        )
    }
}

Pokemon.defaultProps = {
    pokemons: [
        {
            id: 1,
            name: "Charmander",
            type: "fire",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            id: 2,
            name: "Squirtle",
            type: "water",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
            id: 3,
            name: "Butterfree",
            type: "flying",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
            id: 4,
            name: "Rattata",
            type: "normal",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
            id: 5,
            name: "Metapod",
            type: "bug",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
    ]
}


export default Pokemon;