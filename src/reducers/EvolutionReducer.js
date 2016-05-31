import * as actions from '../actions/EvolutionActions';

const initialState = {
  data: [],
  isFetching: false,
  receivedAt: null
}

export const evolution = (state = initialState, action) => {
  switch(action.type) {
    case actions.EVOLUTION_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.EVOLUTION_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.data),
        isFetching: false,
        receivedAt: Date.now()
      }
    case actions.EVOLUTION_FAILURE:
      return {
        ...state,
        isFetching: false
      }
   default:
    return state;
  }
}
