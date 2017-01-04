import {getPageForSport, getUrl, findRelativeUrls} from './helpers'
import {
  URL_FOUND, 
  INITIAL_URLS_FETCHED, 
  RESPONSE_OBJECT_ADDED,
  CREATE_MATCH
} from './reducers'
import { sports } from './constants'
import { parsePageForMatches } from './parser'
import { store } from './store'

const {getState, dispatch} = store

const startScraping = () => {
    return Promise.map(sports, (sport) => {
      return getPageForSport(sport).then(findRelativeUrls)
    })
}


const listenForStoreUpdates = () => {
  return Promise.resolve(store.subscribe(() => {
    let {lastAction} = getState()
    switch(lastAction.type) {
      case URL_FOUND:
        return getUrl(lastAction.url).then((res) => findRelativeUrls(res)).catch(err => err)
      case INITIAL_URLS_FETCHED:
        return console.log(getState().urlsFound.length)
      case RESPONSE_OBJECT_ADDED:
        console.log('response object added')
        return parsePageForMatches(lastAction.responseObject)
      case CREATE_MATCH:
        console.log('match added', Object.keys(getState().matches).map(k => getState().matches[k]).length)
        return


    }
  }))
}

const start = () => {
  listenForStoreUpdates()
  .then(startScraping)
  .catch(err => err)
}

start()
