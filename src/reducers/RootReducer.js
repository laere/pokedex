import { combineReducers } from 'redux';
import { pokedex } from './PokedexReducer';

const rootReducer = combineReducers({
  pokedex
})

export default rootReducer;
