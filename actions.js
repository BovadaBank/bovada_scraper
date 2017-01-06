import { matchRef } from './config'
import {
  LEAGUE_URL_FOUND, 
  LEAGUE_URL_QUERIED,
  ALL_LEAGUE_URLS_FETCHED,
  INDEX_CHANGED,
  LEAGUE_ADDED,
  RESPONSE_OBJECT_PARSED,
  MATCH_URL_FOUND,
  MATCH_URL_QUERIED
} from './reducers'

export const matchUrlFound = (url) => dispatch => {
  return Promise.resolve(
    dispatch({
      type: MATCH_URL_FOUND,
      url
    })
  )
}
export const matchUrlQueried = (url) => dispatch => {
  return Promise.resolve(
    dispatch({
      type: MATCH_URL_QUERIED,
      url
    })
  )
}
export const leagueAdded = (league) => dispatch => {
  return Promise.resolve(
    dispatch({
      type: LEAGUE_ADDED,
      league
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
export const leagueUrlQueried = (url) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: LEAGUE_URL_QUERIED,
      url
    })
  })
}
export const leagueUrlFound = (url) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: LEAGUE_URL_FOUND,
      url
    })
    resolve(url)
  })
}

export const allLeagueUrlsFetched = () => dispatch => {
  return Promise.resolve(dispatch({
    type: ALL_LEAGUE_URLS_FETCHED
  }))
}