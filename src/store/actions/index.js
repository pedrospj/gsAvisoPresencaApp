import * as actionTypes from '../actionTypes';

export { login } from './authActions';
export { realizarLeitura, leituraClearEverything } from './leituraActions';

export const clearError = () => ({ type: actionTypes.STORE_CLEAR_ERROR });
