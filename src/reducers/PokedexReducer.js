import * as actions from '../actions/PokedexActions';
import { combineReducers } from 'redux';

const initialState = {
  data: [],
  isFetching: false,
  receivedAt: null
}

export const pokedexData = (state = initialState, action) => {
  switch(action.type) {
    case actions.POKEDEX_REQUEST:
      return state;
    case actions.POKEDEX_SUCCESS:
      return state;
    case actions.POKEDEX_FAILURE:
      return state;
   default:
    return state;
  }
}

export const search = (state = '', action) => {
  switch(action.type) {
    case POKEDEX_SEARCHVALUE:
      return state;
    default:
      return state;
  }
}

export const pokedex = combineReducers({
  pokedexData,
  search
})
