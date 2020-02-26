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

      if (!response.data.sucesso) {
        throw new Error(response.data.mensagem);
      }

      console.log(response.data);

      dispatch({
        type: actionTypes.LEITURA_REQUEST_SUCESSO,
        payload: {
          error: null,
          success: response.data.sucesso,
        },
      });
    } catch (error) {
      if (error.message === 'Network Error') {
        dispatch({
          type: actionTypes.LEITURA_REQUEST_ERRO,
          payload: { error: 'QR Code inválido!' },
        });
      } else {
        dispatch({
          type: actionTypes.LEITURA_REQUEST_ERRO,
          payload: { error: error.message },
        });
      }
      console.log(error.message, 'deu erro');
    }
  };
};

export const leituraClearEverything = () => ({
  type: actionTypes.LEITURA_CLEAR_EVERYTHING,
});
