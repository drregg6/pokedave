import { combineReducers } from 'redux';

import user from './user';
import pokemon from './pokemon'

/* root reducer */
export default combineReducers({
  user,
  pokemon
});