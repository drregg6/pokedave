import { GET_POKEMON } from './types';
import axios from 'axios';

export const fetchPokemonByType = (type) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`);
    const payload = res.data.pokemon
    dispatch({
      type: GET_POKEMON,
      payload
    });
  } catch (error) {
    console.error(error.message);
  }
}