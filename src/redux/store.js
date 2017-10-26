import { createStore, applyMiddleware } from 'redux';
import createReducer from './reducer';


export default function configureStore() {
  const store = createStore(createReducer());
  store.asyncReducers = {}
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}