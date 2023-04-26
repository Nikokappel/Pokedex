import React from "react";

const PokemonInfo = (props) => {
    const {pokemon} = props;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            <h3>Types:</h3>
            <ul>
                {pokemon.types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
            <h3>Abilities:</h3>
            <ul>
                {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonInfo;
