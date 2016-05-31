import * as actions from '../actions/PokedexActions';
import { combineReducers } from 'redux';

const initialState = {
  data: [],
  isFetching: false,
  receivedAt: null
}

const pokemon = (state = initialState, action) => {
  switch(action.type) {
    case actions.POKEDEX_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.POKEDEX_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.data),
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

 const search = (state = '', action) => {
  switch(action.type) {
    case actions.POKEDEX_SEARCHVALUE:
      return action.text;
    default:
      return state;
  }
}

export const pokedex = combineReducers({
  pokemon,
  search
})
