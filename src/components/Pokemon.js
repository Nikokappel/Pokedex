import React from "react";
import PokemonInfo from "../pages/Pokemoninfo";

const Pokemon = (props) => {
    const {pokemon} = props;
    const [showInfo, setShowInfo] = React.useState(false);

    const handlePokemonClick = (pokemon) => {
        setShowInfo(true);
    }
    return (
    <div className="pokemon-card" onClick={() => handlePokemonClick(pokemon)}>
    
        <div className="pokemon-image-container">
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
        {showInfo && <PokemonInfo pokemon={pokemon} />} {}

    </div>
    )
}

export default Pokemon;