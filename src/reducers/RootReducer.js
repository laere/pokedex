import { combineReducers } from 'redux';
import { pokedex } from './PokedexReducer';
//import { evolution } from './EvolutionReducer';

const rootReducer = combineReducers({
  pokedex
})

export default rootReducer;
