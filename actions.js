import { matchRef } from './config'
import {
  URL_FOUND, 
  URL_QUERIED,
  INITIAL_URLS_FETCHED,
  INDEX_CHANGED,
  RESPONSE_OBJECT_ADDED,
  RESPONSE_OBJECT_PARSED,
  CREATE_MATCH
} from './reducers'

export const createMatch = (match) => dispatch => {
  return Promise.resolve(
    matchRef.child(match.id).set(match, () => {
      dispatch({
        type: CREATE_MATCH,
        match
      })
    })
  )
}
export const responseObjectAdded = (responseObject) => dispatch => {
  return Promise.resolve(
    dispatch({
      type: RESPONSE_OBJECT_ADDED,
      responseObject
    }))
}
export const responseObjectParsed = (responseObject) => dispatch => {
  return Promise.resolve(
    dispatch({
      type: RESPONSE_OBJECT_PARSED,
      responseObject
    }))
}
export const indexChanged = (index) => dispatch => {
  return Promise.resolve(dispatch({
    type: INDEX_CHANGED,
    index
  }))
}
export const urlQueried = (url) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: URL_QUERIED,
      url
    })
  })
}
export const urlFound = (url) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: URL_FOUND,
      url
    })
    resolve(url)
  })
}

export const initialUrlsFetched = () => dispatch => {
  return Promise.resolve(dispatch({
    type: INITIAL_URLS_FETCHED
  }))
}