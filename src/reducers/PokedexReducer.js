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
      return {
        ...state,
        isFetching: true
      }
    case actions.POKEDEX_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        receivedAt: Date.now()
      }
    case actions.POKEDEX_FAILURE:
      return {
        ...state,
        isFetching: false
      }
   default:
    return state;
  }
}

export const search = (state = '', action) => {
  switch(action.type) {
    case POKEDEX_SEARCHVALUE:
      return action.text;
    default:
      return state;
  }
}

export const pokedex = combineReducers({
  pokedexData,
  search
})
