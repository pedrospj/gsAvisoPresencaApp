import * as actionTypes from '../actionTypes';
import updateObject from './updateObject';

const initialState = {
  isLoading: false,
  error: null,
  token: null,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST_COMECO:
      return updateObject(state, { isLoading: true });

    case actionTypes.AUTH_REQUEST_ERRO:
    case actionTypes.AUTH_REQUEST_SUCESSO:
      return updateObject(state, { ...action.payload, isLoading: false });

    case actionTypes.AUTH_LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
