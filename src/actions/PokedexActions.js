import axios from 'axios';

export const POKEDEX_REQUEST = 'POKEDEX_REQUEST';
export const POKEDEX_SUCCESS = 'POKEDEX_SUCCESS';
export const POKEDEX_FAILURE = 'POKEDEX_FAILURE';
export const POKEDEX_SEARCHVALUE = 'POKEDEX_SEARCHVALUE';

const trackSearchValue = (val) => {
  return {
    type: POKEDEX_SEARCHVALUE,
    val
  }
}

const request = () => {
  return {
    type: POKEDEX_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetch = (pokemon) => {
  return (dispatch) => {
    return dispatch(request());

    return axios.get(pokemon)
    .then(res => dispatch(receive(POKEDEX_SUCCESS, res.data)))
    .catch(res => dispatch(receive(POKEDEX_FAILURE)))
  }
}
