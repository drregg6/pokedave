import { GET_POKEMON } from '../actions/types';

const initialState = {
  pokemon: [],
  isLoading: true
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch(type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: [...payload],
        isLoading: false
      }
    default:
      return state;
  }
}