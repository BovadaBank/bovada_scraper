import {URL_FOUND, URL_QUERIED} from './reducers'

export const urlFound = (url) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: URL_FOUND,
      url
    })
    resolve(url)
  })
}

export const urlQueried = (url) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: URL_QUERIED,
      url
    })
    resolve(url)
  })  
}
