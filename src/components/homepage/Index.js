import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPokemonByType } from '../../store/actions/pokemon';

import Searchbar from '../search/Searchbar';

const Index = ({
  fetchPokemonByType,
  pokemon: { pokemon, isLoading }
}) => {
  return (
    <div className="container mx-auto py-5">
      <Searchbar
        fetchPokemonByType={fetchPokemonByType}
      />
      <h1 className="text-2xl font-bold">Welcome to the Homepage</h1>
      {
        (pokemon && isLoading === false) && (
          pokemon.map(pokemon => {
            return <p>{pokemon.pokemon.name}</p>
          })
        )
      }
    </div>
  )
}

Index.propTypes = {
  fetchPokemonByType: PropTypes.func.isRequired,
  pokemon: PropTypes.object,
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
})

export default connect(
  mapStateToProps,
  { fetchPokemonByType }
)(Index);