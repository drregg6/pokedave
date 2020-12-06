import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  fetchPokemonByType,
} from '../../store/actions/pokemon';

import Searchbar from '../search/Searchbar';
import PokemonCard from '../pokemonCard/PokemonCard';

const Index = ({
  fetchPokemonByType,
  pokemon: { pokemonList, isLoading }
}) => {
  return (
    <div className="container mx-auto py-5">
      <Searchbar
        fetchPokemonByType={fetchPokemonByType}
      />
      {
        (pokemonList && isLoading === false) && (
          pokemonList.map((pokemon, idx) => {
            return (
              <PokemonCard
                key={idx}
                pokemonChild={pokemon}
              />
            )
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
  {
    fetchPokemonByType
  }
)(Index);