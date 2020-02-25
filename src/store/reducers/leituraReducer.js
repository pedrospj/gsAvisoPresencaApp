import * as actionTypes from '../actionTypes';
import updateObject from './updateObject';

const initialState = {
  isLoading: false,
  error: null,
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LEITURA_REQUEST_COMECO:
      return updateObject(state, { isLoading: true });

    case actionTypes.LEITURA_REQUEST_ERRO:
    case actionTypes.LEITURA_REQUEST_SUCESSO:
      return updateObject(state, { ...action.payload, isLoading: false });

    case actionTypes.STORE_CLEAR_ERROR:
      return updateObject(state, { error: null });

    case actionTypes.AUTH_LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
