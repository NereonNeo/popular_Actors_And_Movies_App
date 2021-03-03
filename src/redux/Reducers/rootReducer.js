import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { filmsReducer } from './filmsReducer';

export const rootReducers = combineReducers({
  app: appReducer,
  Allfilms: filmsReducer,
});
