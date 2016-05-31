import axios from 'axios';

export const EVOLUTION_REQUEST = 'EVOLUTION_REQUEST';
export const EVOLUTION_SUCCESS = 'EVOLUTION_SUCCESS';
export const EVOLUTION_FAILURE = 'EVOLUTION_FAILURE';

const request = () => {
  return {
    type: EVOLUTION_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchEvolutionData = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
    .then(res => dispatch(receive(EVOLUTION_SUCCESS, res.data)))
    .catch(res => dispatch(receive(EVOLUTION_FAILURE)))
  }
}
