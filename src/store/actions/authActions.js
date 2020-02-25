import * as actionTypes from '../actionTypes';
import axios from '../../utils/axiosInstance';
import { AsyncStorage } from 'react-native';

export const login = (email, senha) => {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.AUTH_REQUEST_COMECO });
      const response = await axios.post('/api/v1/logar', { email, senha });

      if (!response.data.sucesso) {
        throw new Error(response.data.mensagem);
      }

      const { usuario } = response.data;

      const user = {
        nome: usuario.nome,
        role: usuario.role,
        email: usuario.email,
      };

      dispatch({
        type: actionTypes.AUTH_REQUEST_SUCESSO,
        payload: { user, token: response.data.token },
      });
    } catch (error) {
      console.log(error.message, 'ERRO');
    }
  };
};

export const getStoredToken = () => {
  return async dispatch => {};
};
