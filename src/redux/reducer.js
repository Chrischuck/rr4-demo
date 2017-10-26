import { combineReducers } from 'redux';

import rootReducer from './rootReducer'

export default function createReducer(asyncReducers) {
  return combineReducers({
    root: rootReducer,
    ...asyncReducers
  });
}