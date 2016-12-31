import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { urls } from './reducers'

export const store = createStore(combineReducers({
  urls
}), applyMiddleware(thunk))