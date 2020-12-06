import {
  GET_POKEMON,
  GET_POKEMON_LIST,
  CLEAR_POKEMON
} from '../actions/types';

const initialState = {
  pokemonList: [],
  pokemon: null,
  isLoading: true
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch(type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: payload,
        isLoading: false
      }
    case GET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [...payload],
        isLoading: false
      }
    case CLEAR_POKEMON:
      return {
        ...state,
        pokemon: null
      }
    default:
      return state;
  }
}