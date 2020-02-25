import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const realizarLeitura = url => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.LEITURA_REQUEST_COMECO });

      const { token } = getState().auth;

      const response = await axios.post(url, null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response.data);

      dispatch({
        type: actionTypes.LEITURA_REQUEST_SUCESSO,
        payload: {
          error: null,
          sucesso: response.data.sucesso,
        },
      });
    } catch (error) {
      if (error.message === 'Network Error') {
        dispatch({
          type: actionTypes.LEITURA_REQUEST_ERRO,
          payload: { error: 'QR Code inválido!' },
        });
      }
      console.log(error.message, 'deu erro');
    }
  };
};
