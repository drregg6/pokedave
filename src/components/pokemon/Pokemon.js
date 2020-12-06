import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPokemon } from '../../store/actions/pokemon';

const Pokemon = ({
  fetchPokemon,
  pokemon: { isLoading, pokemon }
}) => {
  const { name } = useParams();
  useEffect(() => {
    fetchPokemon(name);
  }, [fetchPokemon, name])
  return (
    <section className="container mx-auto py-6">
      {
        (pokemon && !isLoading) && (
          <div>
            <header className="flex justify-center items-center">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h1 className="uppercase text-3xl">{pokemon.name}</h1>
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            </header>
          </div>
        )
      }
    </section>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
  fetchPokemon: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
})

export default connect(
  mapStateToProps,
  {
    fetchPokemon
  }
)(Pokemon);