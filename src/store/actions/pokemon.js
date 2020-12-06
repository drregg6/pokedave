import {
  GET_POKEMON,
  GET_POKEMON_LIST,
  CLEAR_POKEMON
} from './types';
import axios from 'axios';



export const fetchPokemonByType = (type) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`);
    const payload = res.data.pokemon
    dispatch({
      type: GET_POKEMON_LIST,
      payload
    });
  } catch (error) {
    console.error(error.message);
  }
}


export const fetchPokemon = (name) => async dispatch => {
  dispatch({ type: CLEAR_POKEMON });
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const payload = res.data;
    dispatch({
      type: GET_POKEMON,
      payload
    });
  } catch (error) {
    console.error(error.message);
  }
}