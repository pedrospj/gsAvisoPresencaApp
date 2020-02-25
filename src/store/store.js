import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer, leituraReducer } from './reducers/index';

const rootReducer = combineReducers({
  auth: authReducer,
  leitura: leituraReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
