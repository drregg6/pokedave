import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonCard = ({
  pokemonChild
}) => {
  const { pokemon } = pokemonChild
  return (
    <div>
      <Link to={`/pokemon/${pokemon.name}`}>
        <h1
          className="capitalize"
        >
          {pokemon.name}
        </h1>
      </Link>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemonChild: PropTypes.object,
}

export default PokemonCard;