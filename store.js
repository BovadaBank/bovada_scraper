import {createStore, combineReducers, applyMiddleware} from 'redux';
import { 
  urlsFound,
  urlsQueried, 
  responseObjects, 
  lastAction, 
  lastIndex, 
  matches } from './reducers'
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({
  urlsFound,
  urlsQueried,
  responseObjects,
  lastAction,
  lastIndex,
  matches
}), applyMiddleware(thunk))