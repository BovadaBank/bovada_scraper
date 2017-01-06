import {createStore, combineReducers, applyMiddleware} from 'redux';
import { 
  leagueUrlsFound,
  leagueUrlsQueried, 
  leagues, 
  lastAction, 
  lastIndex, 
  matchUrlsFound,
  matchUrlsQueried
   } from './reducers'
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({
  leagueUrlsFound,
  leagueUrlsQueried,
  leagues,
  lastAction,
  lastIndex,
  matchUrlsFound,
  matchUrlsQueried
}), applyMiddleware(thunk))